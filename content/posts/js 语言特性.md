---
title: js 语言特性
date: 2020-08-07 11:54:42
---

## typeof 关键字

### Basic usage

```javascript
typeof NaN === "number"; // Despite being "Not-A-Number"
typeof Number("1") === "number"; // Number tries to parse things into numbers
typeof Number("shoe") === "number"; // including values that cannot be type coerced to a number

typeof typeof 1 === "string"; // typeof always returns a string
typeof String(1) === "string"; // String converts anything into a string, safer than toString

typeof !!1 === "boolean"; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === "object";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";

// Parentheses can be used for determining the data type of expressions.
let iData = 99;

typeof iData + " Wisen"; // 'number Wisen'
typeof (iData + " Wisen"); // 'string'
```

### Errors

Before ECMAScript 2015, typeof was always guaranteed to return a string for any operand it was supplied with. Even with undeclared identifiers, typeof will return 'undefined'. Using typeof could never generate an error.

But with the addition of block-scoped let and Statements/const using typeof on let and const variables (or using typeof on a class) in a block before they are declared will throw a ReferenceError. Block scoped variables are in a "temporal dead zone" from the start of the block until the initialization is processed, during which, it will throw an error if accessed.

```javascript
typeof undeclaredVariable === "undefined";

typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}
```

### Real-world usage

typeof is very useful, but it's not as versatile as might be required. For example, typeof([]) , is 'object', as well as typeof(new Date()), typeof(/abc/), etc.

For greater specificity in checking types, a typeof wrapper for usage in production-level code would be as follows (provided obj exists):

```javascript
function type(obj, fullClass) {
  // get toPrototypeString() of obj (handles all types)
  // Early JS environments return '[object Object]' for null, so it's best to directly check for it.
  if (fullClass) {
    return obj === null ? "[object Null]" : Object.prototype.toString.call(obj);
  }
  if (obj == null) {
    return (obj + "").toLowerCase();
  } // implicit toString() conversion

  var deepType = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  if (deepType === "generatorfunction") {
    return "function";
  }

  // Prevent overspecificity (for example, [object HTMLDivElement], etc).
  // Account for functionish Regexp (Android <=2.3), functionish <object> element (Chrome <=57, Firefox <=52), etc.
  // String.prototype.match is universally supported.

  return deepType.match(
    /^(array|bigint|date|error|function|generator|regexp|symbol)$/
  )
    ? deepType
    : typeof obj === "object" || typeof obj === "function"
    ? "object"
    : typeof obj;
}
```

## isArray

```javascript
// 下面的函数调用都返回 true
Array.isArray([]);
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用返回 false
Array.isArray(new Uint8Array(32));
```
