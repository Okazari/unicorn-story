import { tween, styler } from 'popmotion'

const backgroundCircle = document.getElementById('backgroundCircle')
const backgroundCircleStyler = styler(backgroundCircle)

const animateBackground = tween({
  from: { r: 0 },
  to: { r: 100 },
  duration: 1000,
})
.start(backgroundCircleStyler.set)

export default animateBackground
