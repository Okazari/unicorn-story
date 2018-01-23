import { tween, styler, action, easing } from 'popmotion'

const mainSvg = document.getElementById('main-svg')
const subSvg = mainSvg.getElementById('drawing')
const eye = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
subSvg.appendChild(eye)

const eyeStyler = styler(eye);
eyeStyler.set({
  opacity: 0,
  ry: 0,
  rx: 3,
  x: 80,
  y: 35,
})

const showEye = tween({
  from: { ry: 0, opacity: 1 },
  to: { ry: 3 },
  duration: 200,
})

/* START: Fill Here */
/* END: Fill Here */

/* START: Update Here */
export default action(({ complete }) => showEye.start({ update: eyeStyler.set, complete }))
/* END: Update Here */
