import { tween, styler, action, easing } from 'popmotion'

const mainSvg = document.getElementById('main-svg')
const subSvg = mainSvg.getElementById('drawing')
const hair = document.createElementNS('http://www.w3.org/2000/svg', 'path')
subSvg.appendChild(hair)

const hairStyler = styler(hair);
hairStyler.set('fill', 'lavender')
hairStyler.set('opacity', 0)
hairStyler.set('d', 'M 79.50,20.75 C 79.50,20.75 83.19,25.56 81.88,28.25 80.56,30.94 74.73,30.32 72.48,29.70 68.35,32.20 70.50,41.06 69.31,43.00 68.12,44.94 66.12,43.88 66.12,43.88 66.12,43.88 66.69,51.19 59.75,51.38 52.81,51.56 51.12,47.06 51.19,43.38 51.25,39.69 55.50,36.44 58.69,37.81 60.50,34.00 65.88,26.19 70.25,24.25 74.62,22.31 76.75,26.12 78.62,25.56 80.50,25.00 79.50,20.75 79.50,20.75 Z')

const animateHair = tween({
  from: { y: -100, opacity: 1 },
  to: { y: 0 },
  duration: 500,
  ease: easing.backOut,
})

export default action(({ complete }) => animateHair.start({ update: hairStyler.set, complete }))
