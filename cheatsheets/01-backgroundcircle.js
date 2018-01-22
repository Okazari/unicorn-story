/******* backgroundCircle.js *******/
/* START: Fill Here */
import { styler, tween, action } from 'popmotion'

const mainSvg = document.getElementById('main-svg')
const backgroundCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
mainSvg.prepend(backgroundCircle)

const backgroundCircleStyler = styler(backgroundCircle)

backgroundCircleStyler.set({
  x: 100,
  y: 100,
  fill: 'darkcyan',
})

const animateBackground = tween({
  from: { r: 0 },
  to: { r: 100 },
  duration: 500,
})

export default action(() => animateBackground.start({ update: backgroundCircleStyler.set }))
/* END: Fill Here */
/***********************************/

/******* index.js *******/
import { backgroundCircle } from './Parts'

/* START: Fill Here */
backgroundCircle.start()
/* END: Fill Here */
/************************/
