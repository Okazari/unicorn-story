import { chain, tween, styler, action } from 'popmotion'

const bodyPath = document.getElementById('body');
const bodyStyler = styler(bodyPath);
bodyStyler.set('opacity', 0)

const drawBody = tween({
  from: { strokeDashoffset: -220, opacity: 1 },
  to: { strokeDashoffset: 0 },
  duration: 2000,
})

const fillBody = tween({
  from: { fillOpacity: 0 },
  to: { fillOpacity: 1 },
  duration: 1000,
})

const animateBody = chain(
  drawBody,
  fillBody
)

export default action(({ complete }) => animateBody.start({ update: bodyStyler.set, complete }))