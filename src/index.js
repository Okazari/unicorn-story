import {
  backgroundCircle,
  horn,
  body,
  hair,
  tail,
  eye,
  burst,
} from './Parts'

backgroundCircle.then({
  duration: 0,
  onComplete() {
    body.play()
  }
}).play()

body.then({
  duration: 0,
  onComplete() {
    horse.play()
  }
})

const horse = new mojs.Timeline({
  onComplete() {
    horn.play()
  }
})
.add(hair)
.add(tail)
.add(eye)

document.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
} );
