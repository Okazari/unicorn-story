/******* eye.js *******/
import { tween, styler, action, easing } from 'popmotion'

const mainSvg = document.getElementById('main-svg')
const subSvg = mainSvg.getElementById('drawing')
const eye = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
subSvg.appendChild(eye)

const eyeStyler = styler(eye);
eyeStyler.set({
  opacity: 0,
  /* START: Fill Here */
  fill: 'black',
  r: 3,
  x: 80,
  y: 35,
  /* END: Fill Here */
})

const showEye = tween({
  /* START: Fill Here */
  from: { scaleY: 0, opacity: 1 },
  to: { scaleY: 1 },
  duration: 200,
  /* END: Fill Here */
})

/* START: Fill Here */
const blinkEye = tween({
  from: { scaleY: 1 },
  to: { scaleY: 0.1 },
  duration: 50,
  flip: 1,
})
/* END: Fill Here */

/* START: Update Here */
export default action(({ complete }) => {
  showEye.start({ update: eyeStyler.set, complete: () => {
    complete()
    setInterval(() => blinkEye.start({ update: eyeStyler.set }), 2000)
  }})
})
/* END: Update Here */
/************************/

/******* index.js *******/
import { backgroundCircle, body, hair, tail, eye } from './Parts'
import { chain, composite } from 'popmotion'

chain(
  backgroundCircle,
  body,
  composite({
    hair,
    tail,
  }),
  eye,
).start()
/************************/
