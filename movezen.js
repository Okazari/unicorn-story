(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var backgroundCircle = new mojs.Shape({
  shape: 'circle',
  radius: { 0: 300 },
  duration: 1000,
  fill: 'darkcyan'
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var shapeName = 'horn';

var Horn = function (_mojs$CustomShape) {
  inherits(Horn, _mojs$CustomShape);

  function Horn() {
    classCallCheck(this, Horn);
    return possibleConstructorReturn(this, (Horn.__proto__ || Object.getPrototypeOf(Horn)).apply(this, arguments));
  }

  createClass(Horn, [{
    key: 'getShape',
    value: function getShape() {
      return '<path\n      d="M 90.65,15.04\n         C 91.61,15.65 84.09,30.17 83.74,30.22\n           81.52,30.43 79.30,29.26 78.74,28.09\n           78.78,28.00 89.70,14.43 90.65,15.04 Z" />';
    }
  }]);
  return Horn;
}(mojs.CustomShape);

mojs.addShape(shapeName, Horn);

var horn = new mojs.Shape({
  shape: shapeName,
  fill: 'aquamarine',
  radius: 200,
  duration: 1500,
  y: { 100: 0 },
  x: { '-40': 0 }
});

var shapeName$1 = 'body';

var Body = function (_mojs$CustomShape) {
  inherits(Body, _mojs$CustomShape);

  function Body() {
    classCallCheck(this, Body);
    return possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
  }

  createClass(Body, [{
    key: 'getShape',
    value: function getShape() {
      return '<path\n      d="M 61.94,43.06\n         C 57.81,45.06 50.02,42.63 43.19,43.25\n           36.35,43.87 32.38,45.50 29.56,50.25\n           23.94,59.56 30.12,69.62 30.19,69.62\n           30.25,69.62 26.69,73.56 27.19,75.62\n           27.69,77.69 31.19,79.94 32.69,79.50\n           34.19,79.06 37.75,74.44 37.75,74.44\n           37.75,74.44 42.25,77.25 49.88,77.19\n           57.50,77.12 64.75,72.75 64.75,72.75\n           64.75,72.75 66.31,77.31 68.44,77.62\n           70.56,77.94 75.56,74.75 75.62,72.94\n           75.69,71.12 72.12,67.06 72.12,67.06\n           72.12,67.06 79.81,58.44 78.00,47.50\n           74.06,46.56 74.10,46.14 74.00,45.75\n           74.25,45.75 74.00,46.69 78.06,47.56\n           81.12,48.69 91.88,45.92 91.94,38.88\n           92.00,31.83 82.94,28.81 75.06,29.06\n           67.00,29.75 65.88,41.31 61.94,43.06 Z\n         M 92.06,52.50" />';
    }
  }]);
  return Body;
}(mojs.CustomShape);

mojs.addShape(shapeName$1, Body);

var body = new mojs.Shape({
  shape: shapeName$1,
  fill: 'none',
  stroke: 'white',
  radius: 200,
  duration: 2000,
  strokeDasharray: '220',
  strokeDashoffset: { '-220': 0, easing: 'linear.none' }
}).then({
  fill: { 'none': 'white' },
  duration: 1000
});

var shapeName$2 = 'tail';

var Tail = function (_mojs$CustomShape) {
  inherits(Tail, _mojs$CustomShape);

  function Tail() {
    classCallCheck(this, Tail);
    return possibleConstructorReturn(this, (Tail.__proto__ || Object.getPrototypeOf(Tail)).apply(this, arguments));
  }

  createClass(Tail, [{
    key: 'getShape',
    value: function getShape() {
      return '<path\n      d="M 7.09,62.65\n         C 9.96,65.65 12.09,64.26 12.57,63.57\n           13.74,62.78 11.70,53.00 14.70,48.65\n           17.70,44.30 21.65,42.43 24.74,42.43\n           27.83,42.43 31.57,43.83 31.78,47.39\n           30.83,47.96 27.78,52.52 27.52,55.65\n           27.52,55.65 23.30,54.87 23.43,59.65\n           23.57,64.43 22.22,71.48 16.26,72.65\n           10.30,73.83 4.83,67.52 7.09,62.65 Z" />';
    }
  }]);
  return Tail;
}(mojs.CustomShape);

mojs.addShape(shapeName$2, Tail);

var tail = new mojs.Shape({
  shape: shapeName$2,
  duration: 1000,
  radius: 200,
  x: { '-800': 0 },
  easing: mojs.easing.bounce.out,
  fill: 'pink'
});

var shapeName$3 = 'hair';

var Hair = function (_mojs$CustomShape) {
  inherits(Hair, _mojs$CustomShape);

  function Hair() {
    classCallCheck(this, Hair);
    return possibleConstructorReturn(this, (Hair.__proto__ || Object.getPrototypeOf(Hair)).apply(this, arguments));
  }

  createClass(Hair, [{
    key: 'getShape',
    value: function getShape() {
      return '<path\n      d="M 79.50,20.75\n         C 79.50,20.75 83.19,25.56 81.88,28.25\n           80.56,30.94 74.73,30.32 72.48,29.70\n           68.35,32.20 70.50,41.06 69.31,43.00\n           68.12,44.94 66.12,43.88 66.12,43.88\n           66.12,43.88 66.69,51.19 59.75,51.38\n           52.81,51.56 51.12,47.06 51.19,43.38\n           51.25,39.69 55.50,36.44 58.69,37.81\n           60.50,34.00 65.88,26.19 70.25,24.25\n           74.62,22.31 76.75,26.12 78.62,25.56\n           80.50,25.00 79.50,20.75 79.50,20.75 Z" />';
    }
  }]);
  return Hair;
}(mojs.CustomShape);

mojs.addShape(shapeName$3, Hair);

var hair = new mojs.Shape({
  shape: shapeName$3,
  fill: 'lavender',
  radius: 200,
  y: { '-800': 0 },
  duration: 1000,
  easing: mojs.easing.bounce.out
});

var eye = new mojs.Shape({
  shape: 'circle',
  fill: 'black',
  radius: 13,
  x: 115,
  y: -60,
  radiusY: { 0: 13 },
  onComplete: function onComplete() {
    eye.tune({
      duration: 100,
      radiusY: { 13: 1 },
      isShowStart: true,
      delay: 2000
    }).then({
      duration: 100,
      radiusY: { 1: 13 }
    });
    eye.replay();
  }
});

var burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 4: 19 },
  angle: 45,
  children: {
    shape: 'line',
    radius: 10,
    scale: 1,
    stroke: '#FD7932',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    duration: 700,
    easing: 'quad.out'
  }
});

backgroundCircle.then({
  duration: 0,
  onComplete: function onComplete() {
    body.play();
  }
}).play();

body.then({
  duration: 0,
  onComplete: function onComplete() {
    horse.play();
  }
});

var horse = new mojs.Timeline({
  onComplete: function onComplete() {
    horn.play();
  }
}).add(hair).add(tail).add(eye);

document.addEventListener('click', function (e) {
  burst.tune({ x: e.pageX, y: e.pageY }).replay();
});

})));
