import { tween, styler, action } from 'popmotion'

const horn = document.getElementById('horn');
const hornStyler = styler(horn);
hornStyler.set('opacity', 0)

const animateHorn = tween({
  from: { x: -40, y: 30, opacity: 1 },
  to: { x: 0, y: 0 },
  duration: 1500,
})

export default action(({ complete }) => animateHorn.start({ update: hornStyler.set, complete }))