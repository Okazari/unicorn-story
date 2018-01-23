import { tween, styler, action } from 'popmotion'
import bounce from '../bounce'

const path = 'M 90.65,15.04 C 91.61,15.65 84.09,30.17 83.74,30.22 81.52,30.43 79.30,29.26 78.74,28.09 78.78,28.00 89.70,14.43 90.65,15.04 Z'

const mainSvg = document.getElementById('main-svg')
const subSvg = mainSvg.getElementById('drawing')
const horn = document.createElementNS('http://www.w3.org/2000/svg', 'path')
subSvg.appendChild(horn)

const hornStyler = styler(horn);
hornStyler.set({
  /* START: Fill Here */
  fill: 'aquamarine',
  /* END: Fill Here */
  opacity: 0,
  d: path,
})

const animateHorn = tween({
  /* START: Fill Here */
  from: {
    x: -20,
    y: 30,
    opacity: 1,
  },
  to: { x: 0, y: 0 },
  duration: 1000,
  /* END: Fill Here */
})

export default action(({ complete }) => animateHorn.start({ update: hornStyler.set, complete }))
