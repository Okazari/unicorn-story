import { tween, styler } from 'popmotion'

const hair = document.getElementById('hair');
const hairStyler = styler(hair);

const animateHair = tween({
  from: { y: -800 },
  to: { y: 0 },
  duration: 1000,
})
.start(hairStyler.set)

export default animateHair