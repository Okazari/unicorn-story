const eye = new mojs.Shape({
  shape: 'circle',
  fill: 'black',
  radius: 13,
  x: 115,
  y: -60,
  radiusY: { 0: 13 },
  onComplete() {
    eye.tune({
      duration: 100,
      radiusY: { 13: 1 },
      isShowStart: true,
      delay: 2000,
    }).then({
      duration: 100,
      radiusY: { 1: 13 },
    })
    eye.replay()
  }
})

export default eye
