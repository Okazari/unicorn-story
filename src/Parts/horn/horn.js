import { tween, styler, action } from 'popmotion'

const horn = document.getElementById('horn');
const hornStyler = styler(horn);
hornStyler.set('fill', 'aquamarine')

const animateHorn = tween({
  from: {
    x: -20,
    y: 30,
    opacity: 1,
  },
  to: { x: 0, y: 0 },
  duration: 1000,
})

export default action(({ complete }) => animateHorn.start({ update: hornStyler.set, complete }))
