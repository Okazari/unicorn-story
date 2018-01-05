import { tween, styler, action } from 'popmotion'

const hair = document.getElementById('hair');
const hairStyler = styler(hair);

hairStyler.set('opacity', 0)

const animateHair = tween({
  from: { y: -800, opacity: 1 },
  to: { y: 0 },
  duration: 1000,
})

export default action(({ complete }) => animateHair.start({ update: hairStyler.set, complete }))
