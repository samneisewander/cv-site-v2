.PHONY: fmt
fmt:
	npx prettier --write --print-width 80 --prose-wrap always "*/**/*.md"