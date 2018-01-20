import { tween, styler, action, easing } from 'popmotion'

const tail = document.getElementById('tail');
const tailStyler = styler(tail);
tailStyler.set('fill', 'pink')

const animateTail = tween({
  from: { x: -100, opacity: 1 },
  to: { x: 0 },
  duration: 500,
  ease: easing.backOut
})

export default action(({ complete }) => animateTail.start({ update: tailStyler.set, complete }))
