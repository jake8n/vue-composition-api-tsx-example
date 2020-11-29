# Scratch

* Functional component props do not get first class type safety (tracked by issue [#137](https://github.com/vuejs/jsx/issues/137)). A saving grace is that performances are neglible in function over stateful components; the only real difference is syntax.
* `h` is not automatically injected for `.tsx` files.
* 🐌 esbuild-loader does not like "preserve" option for JSX.
* Hot module replacement is flakey
