import { tween, styler, action, easing } from 'popmotion'

const mainSvg = document.getElementById('main-svg')
const subSvg = mainSvg.getElementById('drawing')
const eye = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
subSvg.appendChild(eye)

const eyeStyler = styler(eye);
eyeStyler.set('opacity', 0)
eyeStyler.set('fill', 'black')
eyeStyler.set('r', 3)
eyeStyler.set('x', 80)
eyeStyler.set('y', 35)

const showEye = tween({
  from: { scaleY: 0, opacity: 1 },
  to: { scaleY: 1 },
  duration: 200,
})

const blinkEye = tween({
  from: { scaleY: 1 },
  to: { scaleY: 0.1 },
  duration: 50,
  flip: 1,
})

export default action(({ complete }) => {
  showEye.start({ update: eyeStyler.set, complete: () => {
    complete()
    setInterval(() => blinkEye.start({ update: eyeStyler.set }), 2000)
  }})
})


// const eye = new mojs.Shape({
//   shape: 'circle',
//   fill: 'black',
//   radius: 13,
//   x: 115,
//   y: -60,
//   radiusY: { 0: 13 },
//   onComplete() {
//     eye.tune({
//       duration: 100,
//       radiusY: { 13: 1 },
//       isShowStart: true,
//       delay: 2000,
//     }).then({
//       duration: 100,
//       radiusY: { 1: 13 },
//     })
//     eye.replay()
//   }
// })
//
// export default eye
