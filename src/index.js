import { chain, tween, styler, timeline } from 'popmotion'

/*** BACKGROUND ***/
const backgroundCircle = document.getElementById('backgroundCircle')
const backgroundCircleStyler = styler(backgroundCircle)

const drawCircle = tween({
  from: { r: 0 },
  to: { r: 50 },
  duration: 1000,
})
.start(backgroundCircleStyler.set)

/*** BODY ***/
const body = document.getElementById('body');
const bodyStyler = styler(body);
const bodyLength = body.getTotalLength()

bodyStyler.set('stroke', 'white')
bodyStyler.set('stroke-dasharray', bodyLength)
bodyStyler.set('fill', '#FFF')
bodyStyler.set('fillOpacity', 0)

const drawBody = tween({
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