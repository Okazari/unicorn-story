import { tween, styler } from 'popmotion'

const horn = document.getElementById('horn');
const hornStyler = styler(horn);

const animateHorn = tween({
  from: { x: -40, y: 30 },
  to: { x: 0, y: 0 },
  duration: 1500,
})
.start(hornStyler.set)

export default animateHorn