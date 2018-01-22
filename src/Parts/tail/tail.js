import { tween, styler, action, easing } from 'popmotion'

const path = 'M 7.09,62.65 C 9.96,65.65 12.09,64.26 12.57,63.57 13.74,62.78 11.70,53.00 14.70,48.65 17.70,44.30 21.65,42.43 24.74,42.43 27.83,42.43 31.57,43.83 31.78,47.39 30.83,47.96 27.78,52.52 27.52,55.65 27.52,55.65 23.30,54.87 23.43,59.65 23.57,64.43 22.22,71.48 16.26,72.65 10.30,73.83 4.83,67.52 7.09,62.65 Z'

const mainSvg = document.getElementById('main-svg')
const subSvg = mainSvg.getElementById('drawing')
const tail = document.createElementNS('http://www.w3.org/2000/svg', 'path')
subSvg.appendChild(tail)

const tailStyler = styler(tail);
tailStyler.set({
  /* START: Fill Here */
  fill: 'pink',
  /* END: Fill Here */
  opacity: 0,
  d: path,
})

const animateTail = tween({
  /* START: Fill Here */
  from: { x: -100, opacity: 1 },
  to: { x: 0 },
  duration: 500,
  ease: easing.backOut
  /* END: Fill Here */
})

export default action(({ complete }) => animateTail.start({ update: tailStyler.set, complete }))
