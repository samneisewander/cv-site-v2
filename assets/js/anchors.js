// Progressive enhancement: clicking a heading anchor copies the section URL.
// Without JS (or clipboard support) the anchor still works as a normal link.
(function () {
  "use strict";
  if (!navigator.clipboard) return;

  document.querySelectorAll(".heading-anchor[data-anchor]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var hash = a.getAttribute("href");
      var url = location.origin + location.pathname + hash;
      navigator.clipboard.writeText(url).then(function () {
        history.replaceState(null, "", hash);
        a.classList.add("copied");
        setTimeout(function () { a.classList.remove("copied"); }, 1200);
      });
    });
  });
})();
