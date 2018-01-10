import { chain, tween, styler, action, easing } from 'popmotion'

const bodyPath = document.getElementById('body');
const bodyStyler = styler(bodyPath);
bodyStyler.set('opacity', 0)
bodyStyler.set('strokeWidth', 0.5)
const drawBody = tween({
  from: { pathLength: 0, opacity: 1 },
  to: { pathLength: 100 },
  duration: 2000,
  ease: easing.easeInOut
})

const fillBody = tween({
  from: { fillOpacity: 0 },
  to: { fillOpacity: 1 },
  duration: 500,
})

const animateBody = chain(
  drawBody,
  fillBody
)

export default action(({ complete }) => animateBody.start({ update: bodyStyler.set, complete }))
