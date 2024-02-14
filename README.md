<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isMethodIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if an object has a specified method name, either own or inherited.



<section class="usage">

## Usage

```javascript
import isMethodIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-method-in@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/assert-is-method-in/tags). For example,

```javascript
import isMethodIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-method-in@v0.2.0-deno/mod.js';
```

#### isMethodIn( value, property )

Returns a `boolean` indicating if a `value` has a specified method name, either own or inherited.

```javascript
var value = {
    'beep': 'boop'
};

var bool = isMethodIn( value, 'toString' );
// returns true

bool = isMethodIn( value, 'beep' );
// returns false

bool = isMethodIn( value, 'bap' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function does **not** throw when provided `null` or `undefined`. Instead, the function returns `false`.

    ```javascript
    var bool = isMethodIn( null, 'toString' );
    // returns false

    bool = isMethodIn( void 0, 'toString' );
    // returns false
    ```

-   Value arguments other than `null` or `undefined` are coerced to `objects`.

    ```javascript
    var bool = isMethodIn( 'beep', 'toString' );
    // returns true
    ```

-   Non-symbol property arguments are coerced to `strings`.

    ```javascript
    function noop() {
        // Example function...
    }

    var value = {
        'null': noop
    };
    var bool = isMethodIn( value, null );
    // returns true

    value = {
        '[object Object]': noop
    };
    bool = isMethodIn( value, {} );
    // returns true
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable object-curly-newline, object-curly-spacing -->

<!-- eslint no-undef: "error" -->

```javascript
import isMethodIn from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-method-in@deno/mod.js';

var bool = isMethodIn( {}, 'toString' );
// returns true

bool = isMethodIn( { 'a': 'b' }, 'a' );
// returns false

bool = isMethodIn( { 'a': 'b' }, 'c' );
// returns false

bool = isMethodIn( { 'a': 'b' }, null );
// returns false

bool = isMethodIn( null, 'a' );
// returns false

bool = isMethodIn( void 0, 'a' );
// returns false

bool = isMethodIn( { 'null': isMethodIn }, null );
// returns true

bool = isMethodIn( { '[object Object]': isMethodIn }, {} );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-has-property`][@stdlib/assert/has-property]</span><span class="delimiter">: </span><span class="description">test if an object has a specified property, either own or inherited.</span>
-   <span class="package-name">[`@stdlib/assert-is-function`][@stdlib/assert/is-function]</span><span class="delimiter">: </span><span class="description">test if a value is a function.</span>
-   <span class="package-name">[`@stdlib/assert-is-method`][@stdlib/assert/is-method]</span><span class="delimiter">: </span><span class="description">test if an object has a specified method name.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-method-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-method-in

[test-image]: https://github.com/stdlib-js/assert-is-method-in/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/assert-is-method-in/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-method-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-method-in?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-method-in.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-method-in/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-method-in/tree/deno
[deno-readme]: https://github.com/stdlib-js/assert-is-method-in/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/assert-is-method-in/tree/umd
[umd-readme]: https://github.com/stdlib-js/assert-is-method-in/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/assert-is-method-in/tree/esm
[esm-readme]: https://github.com/stdlib-js/assert-is-method-in/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/assert-is-method-in/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-method-in/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/has-property]: https://github.com/stdlib-js/assert-has-property/tree/deno

[@stdlib/assert/is-function]: https://github.com/stdlib-js/assert-is-function/tree/deno

[@stdlib/assert/is-method]: https://github.com/stdlib-js/assert-is-method/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
