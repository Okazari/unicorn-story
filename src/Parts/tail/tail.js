import { tween, styler, action } from 'popmotion'

const tail = document.getElementById('tail');
const tailStyler = styler(tail);
tailStyler.set('opacity', 0)

const animateTail = tween({
  from: { x: -800, opacity: 1 },
  to: { x: 0 },
  duration: 1000,
})

export default action(({ complete }) => animateTail.start({ update: tailStyler.set, complete }))