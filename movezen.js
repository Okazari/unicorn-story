

// Tree
class Body extends mojs.CustomShape {
  getShape() { return `<path
    d="M 61.94,43.06
       C 57.81,45.06 50.02,42.63 43.19,43.25
         36.35,43.87 32.38,45.50 29.56,50.25
         23.94,59.56 30.12,69.62 30.19,69.62
         30.25,69.62 26.69,73.56 27.19,75.62
         27.69,77.69 31.19,79.94 32.69,79.50
         34.19,79.06 37.75,74.44 37.75,74.44
         37.75,74.44 42.25,77.25 49.88,77.19
         57.50,77.12 64.75,72.75 64.75,72.75
         64.75,72.75 66.31,77.31 68.44,77.62
         70.56,77.94 75.56,74.75 75.62,72.94
         75.69,71.12 72.12,67.06 72.12,67.06
         72.12,67.06 79.81,58.44 78.00,47.50
         74.06,46.56 74.10,46.14 74.00,45.75
         74.25,45.75 74.00,46.69 78.06,47.56
         81.12,48.69 92.44,47.25 91.94,38.88
         89.38,30.69 82.94,28.81 75.06,29.06
         67.00,29.75 65.88,41.31 61.94,43.06 Z
       M 92.06,52.50" />`}
}

mojs.addShape('body', Body)


const body = new mojs.Shape({
  shape: 'body',
  stroke: 'white',
  fill: 'none',
  duration: 2000,
  strokeDashoffset: { '-220' : '0', easing: 'linear.none' },
  strokeDasharray: 220,
  isShowStart: true,
  radius: 200,
  top: '50%',
  y: -10,
}).then({
  fill: { 'none': 'white'},
  duration: 500,
  onComplete() {
    eye.play()
  },
}).play()

const eye = new mojs.Shape({
  shape: 'circle',
  fill: 'black',
  radius: 13,
  duration: 500,
  x: 115,
  y: -70,
  radiusY: { 0: 13 },
  onComplete() {
    console.log('totot')
    eye.tune({
      duration: 100,
      radiusY: { 13: 1 },
      isShowStart: true,
      delay: 5000,
    }).then({
      radiusY: { 1: 13 },
    })
    eye.replay()
  },
})
