import { tween, styler, action } from 'popmotion'

const backgroundCircle = document.getElementById('backgroundCircle')
const backgroundCircleStyler = styler(backgroundCircle)

const animateBackground = tween({
  from: { r: 0 },
  to: { r: 100 },
  duration: 1000,
})

export default action(({ complete }) => animateBackground.start({ update: backgroundCircleStyler.set, complete }))
