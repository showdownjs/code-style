Shodown Code Style and Orientations
===================================

Code-style for showdown and related projects.

## Introduction
In this file, you can check the the code styling and rules for showdown and it's related projects. It's roughly based on
[Google JavaScript Style Guide][1]. Using these rules is strongly advisable when contributing to showdown projects.
In this repository you can also find a .editorconfig file and a .jshint file that you can use to automatically enforce
these rules (if your IDE supports it).

For more information, check the [editorconfig][2] and [jshint][3] project pages.


## Tabs and indentation
 - **DO NOT USE** tab character, use spaces instead
 - Tab size is 2 spaces
 - Indentation is 1 tab size (2 spaces)
 - Continuation indent is 1 tab size
 - Multiple variable declaration MUST BE wrapped and aligned (4 spaces, usually)
 - Empty lines MUST not keep indents
 - Blank lines CAN be added for readability
 - 2 consecutive blank lines are allowed
 - 'case' branches in switch statements MUST BE indented


```javascript
function foo() {
  var bar = 'bar',
      baz = 1;

  if (bar === 'bar') {
    alert('something');
  }
}
```

## Semicolons and quotation
  - **Statements must ALWAYS be terminated with semicolon**. However, multiple variable declaration is allowed.
  - Single quotes are preferred to double quotes. Exceptionally, double quotes might be used if single quotes would require escaping


```javascript
var foo = 'some string',
    baz = "I'm using single quotes inside";
```


## Spaces

### Before parenthesis
  - **DO NOT ADD** before:
    - function declaration
    - function call


```javascript
function foo() {
  return 0;
}

foo();
```


  - **ADD** before:
    - 'if'
    - 'for'
    - 'while'
    - 'switch'
    - 'catch'
    - in function expression


```javascript
if (i > 10) {
  for (var j = 0; j < 10; j++) {
    switch (j) {
      case 0:
        value = 'zero';
        break;
      case 1:
        value = 'one';
        break;
    }
  }
}
```

### Around operators
  - **ADD** around:
    - assignment operators (=, +=, ...)
    - logical operators (&&, ||)
    - equality operators (==, ===, !=, !==)
    - relational operators (<, >, <=, >=)
    - bitwise operators (&, |, ^, ...)
    - additive operators (+, -) and multiplication operators (*,/,%)
    - shift operators (<<,>>,>>>, ...)


```javascript
var a = 0,
    b = (i == j || j > 5),
    c = (j << 2) & 4,
    d += 1,
    e = a + d;
```

  - **DO NOT ADD** around:
    - unary operators (!, -, +, ++, --)


```javascript
j++;
bar = !foo;
```

### Before left brace
  - **ADD** before:
    - function
    - 'if'
    - 'else'
    - 'for'
    - 'while'
    - 'do'
    - 'switch'
    - 'try'
    - 'catch'
    - 'finally'

### Before keywords
  - **ADD** before:
    - 'else'
    - 'while'
    - 'catch'
    - 'finally'


```javascript
var foo = function () {
  if (bar) {
    try {
      baz();
    } catch (e) {
      alert('Failure: ' + e.message);
    } finally {
      reset(a, i);
    }
  } else {
    bazinga();
  }
}
```

### Within
  - **DO NOT ADD** within:
    - brackets
    - object literal braces
    - function call, function declaration, 'if', 'for', 'while', 'switch' or 'catch' parentheses

### In ternary operators
  - **ADD**
    - before '?'
    - after '?'
    - before ':'
    - after ':'


```javascript
var c = j > 5 ? 'GT 5' : 'LE 5';
```


### Other
  - **ADD**
    - after comma
    - after property name-value separator (:)
  - **DO NOT ADD**
    - before comma
    - before semicolon
    - before property name-value separator (:)

## Braces
We use **egyptian braces**. That means braces are **ALWAYS** placed at the **End of Line**
Also, braces are required in every block elements, even if they are oneliners ('if', 'while', 'do...while', 'try...catch...finally', etc...)

## Wrapping
We use a soft wrap of 120 characters long. Also:
  - Comments MAY wrap at right margin
  - Function declaration arguments MAY wrap if long and aligned when multiline.
  - Function call arguments MAY wrap if long and aligned when multiline.
  - Object literals MUST ALWAYS be wrapped
  - Multiple variable declaration MUST BE wrapped.


```javascript
foo(a, b, c, d); // Line comment
                 // which can be
                 // wrapped if
                 // long.
foo(a, b, c, d
    e, f, g, h, i);

function foo(a, b, c, d, bla,
             ble, bli, blu) {

}
```

[1]: https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
[2]: http://editorconfig.org/
[3]: http://jshint.com/