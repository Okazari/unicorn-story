import { tween, styler, action, easing } from 'popmotion'

const hair = document.getElementById('hair');
const hairStyler = styler(hair);

hairStyler.set('opacity', 0)

const animateHair = tween({
  from: { y: -100, opacity: 1 },
  to: { y: 0 },
  duration: 500,
  ease: easing.backOut,
})

export default action(({ complete }) => animateHair.start({ update: hairStyler.set, complete }))
