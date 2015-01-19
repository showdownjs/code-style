/**
 * Javascript style sample file
 */

function foo(x, y, z) {
  bar(1, b);
  var i = 0,
      x = {
        0: 'zero',
        1: 'one'
      },
      a = [0, 1, 2],
      foo = function () {

      };
  if (!i > 10) {
    for (var j = 0; j < 10; j++) {
      switch (j) {
        case 0:
          value = 'zero';
          break;
        case 1:
          value = 'one';
          break;
      }
      var c = j > 5 ? 'GT 5' : 'LE 5';
    }
  } else {
    var j = 0;
    try {
      while (j < 10) {
        if (i == j || j > 5) {
          a[j] = i + j * 12;
        }
        i = (j << 2) & 4;
        j++;
      }
      do {
        j--;
      } while (j > 0)
    } catch (e) {
      alert('Failure: ' + e.message);
    } finally {
      reset(a, i);
    }
  }
}

foo('demo', {
  title: 'Demo',
  width: 100
}, function () {
  alert('test');
});

function buzz() {
  return 0;
}

var foo = {
  numbers: [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six'
  ],
  data: {
    a: {
      id:          123,
      type:        'String',
      isAvailable: true
    },
    b: {
      id:   456,
      type: 'Int'
    }
  },
  fOne: function (a, b, c, d, e, f, g, h) {
    var x = a + b + c + d + e + f + g + h;
    fTwo(a, b, c, fThree(d, e, f, g, h));
    var z = a == 'Some string' ? 'yes' : 'no';
    z = a == 10 ? 'yes' : 'no';
    var colors = [
      'red', 'green', 'blue', 'black', 'white', 'gray'
    ];
    for (j = 0; j < 2; j++) {
      i = a;
    }
    for (var i = 0; i < colors.length; i++) {
      var colorString = this.numbers[i];
    }
  },

  /**
   * Function JSDoc. Long lines can be
   * wrapped with 'Comments'/'Wrap at
   * right margin' option
   * @param {string} a Parameter A
   *   description.
   * @param {string} b Parameter B
   *   description. Can extend beyond
   *   the right margin.
   */
  fTwo: function (a, b, c, d) {
    foo(a, b, c, d); // Line comment
                     // which can be
                     // wrapped if
                     // long.
    if (true) {
      return c;
    }
    if (a == 'one' && (b == 'two' || c == 'three')) {
      return a + b + c + d;
    } else {
      return strD;
    }
    if (a == 'one') {
      return 1;
    } else if (a == 'two') {
      return 2;
    }
    var number = -10;
    while (x < 0) {
      number = number + 1;
    }
    do {
      number = number + 1;
    } while (number < 10);
    return d;
  },
  fThree: function (strA, strB, strC, strD, strE) {
    var number = prompt('Enter a number:', 0);
    switch (number) {
      case 0 :
        alert('Zero');
        break;
      case 1:
        alert('One');
        break;
    }
    try {
      a[2] = 10;
    } catch (e) {
      alert('Failure: ' + e.message);
    }
    return strA + strB + strC + strD + strE;
  }
};

function fooBar() {
  var myLink   = {
        img:   'btn.gif',
        text:  'Button',
        width: 128
      },
      local = true,
      initial = -1,
      varName = val;

  return {
    a: initial,
    b: local,
    c: myLink,
    d: varName
  };
}
