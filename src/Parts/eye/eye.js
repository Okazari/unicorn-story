import { tween, styler, action, easing } from 'popmotion'

const mainSvg = document.getElementById('main-svg')
const subSvg = mainSvg.getElementById('drawing')
const eye = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
subSvg.appendChild(eye)

const eyeStyler = styler(eye);
eyeStyler.set({
  opacity: 0,
  /* START: Fill Here */
  /* END: Fill Here */
})

const showEye = tween({
  /* START: Fill Here */
  /* END: Fill Here */
})

/* START: Fill Here */
/* END: Fill Here */

/* START: Update Here */
export default action(({ complete }) => showEye.start({ update: eyeStyler.set, complete }))
/* END: Update Here */
