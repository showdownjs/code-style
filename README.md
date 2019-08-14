Shodown Code Style and Orientations
===================================

Code-style for showdown and related projects.

## Introduction
In this file, you can check the the code styling, rules and commit message conventions for showdown and it's related projects. It's roughly based on [Google JavaScript Style Guide][1] and [AngularJS Git Commit Msg Convention][8]. Using these rules is strongly advisable when contributing to showdown projects.
In this repository you can also find a [.editorconfig][2], [.jshintrc][3] and [.jscs.json][4] file that you can use to automatically enforce
these rules (if your IDE supports it).

For more information, check the [editorconfig][5], [jshint][6] and [jscs][7] project pages.


## Tabs and indentation
 - **DO NOT USE** tab character, use spaces instead
 - Tab size is 2 spaces
 - Indentation is 1 tab size (2 spaces)
 - Continuation indent is 1 tab size
 - Multiple variable declaration MUST BE chopped and aligned (4 spaces, usually)
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
  - Object literals MUST ALWAYS BE chopped
  - Multiple variable declaration MUST BE chopped and aligned (4 spaces, usually)


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

---------------------------------------------------------------

## Commit message convention

We use the [AngularJS Git Commit Msg Convention][8] because it enables us to:
- automatically generate the changelog with pointers to the appropriate issues and commits
- simple navigatie through the git history, focusing on important things while ignoring trivial changes


### Format of the commit message:
```bash
<type>(<scope>): <subject>

<body>

<footer>
```


### Message subject (first line)
First line cannot be longer than 70 characters, second line is always blank and
other lines should be wrapped at 80 characters. The type and scope should
always be lowercase as shown below.

#### Allowed `<type>` values:

- **feat** (new feature for the user, not a new feature for build script)
- **fix** (bug fix for the user, not a fix to a build script)
- **docs** (changes to the documentation)
- **style** (formatting, missing semi colons, etc; no production code change)
- **refactor** (refactoring production code, eg. renaming a variable)
- **test** (adding missing tests, refactoring tests; no production code change)
- **chore** (updating grunt tasks etc; no production code change)

#### Example `<scope>` values:

- list-parser
- loader
- extension-registering
- showdown-options
- etc.

The `<scope>` can be empty (eg. if the change is a global or difficult
to assign to a single component), in which case the parentheses are
omitted.


### Message body
* uses the imperative, present tense: “change” not “changed” nor “changes”
* includes motivation for the change and contrasts with previous behavior

For more info about message body, see:

* http://365git.tumblr.com/post/3308646748/writing-git-commit-messages
* http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html


### Message footer

#### Referencing issues
Closed issues should be listed on a separate line in the footer prefixed with "Closes" keyword like this:
```bash
Closes #234
```
or in case of multiple issues:
```bash
Closes #123, #245, #992
```
#### Breaking changes

All breaking changes have to be mentioned in footer with the
description of the change, justification and migration notes.
```bash
BREAKING CHANGE:

`extension-registering` now is done throught a function call instead of assigning a property directly in the `showdown.extensions` object.

To migrate your extension, use the function showdown.registerExtension() instead.
```

### Further reading
For more information and examples, please read the [AngularJS Git Commit Msg Convention][8].

---

[1]: https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
[2]: https://github.com/showdownjs/code-style/blob/master/.editorconfig
[3]: https://github.com/showdownjs/code-style/blob/master/.jshintrc
[4]: https://github.com/showdownjs/code-style/blob/master/.jscs.json
[5]: http://editorconfig.org/
[6]: http://jshint.com/
[7]: http://jscs.info/
[8]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit
