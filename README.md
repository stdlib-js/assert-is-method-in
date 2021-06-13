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

# isMethodIn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Test if an object has a specified method name, either own or inherited.

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-method-in
```

</section>

<section class="usage">

## Usage

```javascript
var isMethodIn = require( '@stdlib/assert-is-method-in' );
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
var isMethodIn = require( '@stdlib/assert-is-method-in' );

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


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-method-in.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-method-in

[test-image]: https://github.com/stdlib-js/assert-is-method-in/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/assert-is-method-in/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-method-in/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-method-in?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-method-in
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-method-in/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-method-in/main/LICENSE

</section>

<!-- /.links -->
