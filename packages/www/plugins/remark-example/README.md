# remark-example

Use `<example src="path/to/file">` to render an iframe and syntax highlighted code snippet of the source file.

This assumes you have an `examples` directory in `src` and paths are relative to `examples` directory. Examples should get rendered into their own page. Layout checks for `/examples/` in `location.pathname` and returns only the `children()`.


### TODO

Make this a legit plugin.

### Issues

- readFileSync is returning cached content after example file changes and markdown changes
