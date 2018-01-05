import { tween, styler } from 'popmotion'

const tail = document.getElementById('tail');
const tailStyler = styler(tail);

const animateTail = tween({
  from: { x: -800 },
  to: { x: 0 },
  duration: 1000,
})
.start(tailStyler.set)

export default animateTail