import { tween, styler, action, easing } from 'popmotion'

const eye = document.getElementById('eye');
const eyeStyler = styler(eye);

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
