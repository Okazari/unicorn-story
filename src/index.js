import { chain, tween, styler, timeline, easing } from 'popmotion'

/*** BACKGROUND ***/
const backgroundCircle = document.getElementById('backgroundCircle')
const backgroundCircleStyler = styler(backgroundCircle)

tween({
  from: { r: 0 },
  to: { r: 100 },
  duration: 1000,
})
.start(backgroundCircleStyler.set)

/*** BODY ***/
const body = document.getElementById('body');
const bodyStyler = styler(body);
const bodyLength = body.getTotalLength()

bodyStyler.set('stroke-dasharray', bodyLength)

tween({
  from: { strokeDashoffset: -bodyLength },
  to: { strokeDashoffset: 0 },
  duration: 2000,
})

chain(
  tween({
    from: { strokeDashoffset: -bodyLength },
    to: { strokeDashoffset: 0 },
    duration: 2000,
  }),
  tween({
    from: { fillOpacity: 0 },
    to: { fillOpacity: 1 },
    duration: 1000,
  })
)
.start(bodyStyler.set);

/*** HAIR ***/
const hair = document.getElementById('hair');
const hairStyler = styler(hair);

tween({
  from: { y: -800 },
  to: { y: 0 },
  duration: 1000,
  easing: easing.backOut,
})
.start(hairStyler.set)

/*** TAIL ***/
const tail = document.getElementById('tail');
const tailStyler = styler(tail);

tween({
  from: { x: -800 },
  to: { x: 0 },
  duration: 1000,
  easing: easing.backOut,
})
.start(tailStyler.set)

/*** EYE ***/
const eye = document.getElementById('eye');
const eyeStyler = styler(eye);

/*** HORN ***/
const horn = document.getElementById('horn');
const hornStyler = styler(horn);

tween({
  from: { x: -40, y: 30 },
  to: { x: 0, y: 0 },
  duration: 1500,
})
.start(hornStyler.set)

// timeline([
//   { track: 'backgroundCircle', from: { r: 0 }, to: { r: 50 }, duration: 1000 },
//   { track: 'body', from: { strokeDashoffset: -bodyLength }, to: { strokeDashoffset: 0 }, duration: 2000 },
//   [
//     { track: 'body', from: { fillOpacity: 0 }, to: { fillOpacity: 1 }, duration: 1000 }
//   ]
// ]).start(({backgroundCircle, body}) => {
//   backgroundCircleStyler.set(backgroundCircle);
//   bodyStyler.set(body)
// })