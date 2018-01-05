import { chain, tween, styler } from 'popmotion'

const body = document.getElementById('body');
const bodyStyler = styler(body);
const bodyLength = body.getTotalLength()

bodyStyler.set('stroke-dasharray', bodyLength)

const drawBody = tween({
  from: { strokeDashoffset: -bodyLength },
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
.start(bodyStyler.set);

export default animateBody