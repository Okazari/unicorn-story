import { tween, styler, action } from 'popmotion'

const mainSvg = document.getElementById('main-svg')
const backgroundCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
mainSvg.prepend(backgroundCircle)
const backgroundCircleStyler = styler(backgroundCircle)
backgroundCircleStyler.set('fill', 'darkcyan')
backgroundCircleStyler.set('cx', 100)
backgroundCircleStyler.set('cy', 100)

const animateBackground = tween({
  from: { r: 0 },
  to: { r: 100 },
  duration: 1000,
})

export default action(({ complete }) => animateBackground.start({ update: backgroundCircleStyler.set, complete }))
