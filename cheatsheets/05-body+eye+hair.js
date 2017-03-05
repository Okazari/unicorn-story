const backgroundCircle = new mojs.Shape({
  shape:'circle',
  radius: 1000,
  fill: 'darkcyan',
}).play()

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
         81.12,48.69 91.88,45.92 91.94,38.88
         92.00,31.83 82.94,28.81 75.06,29.06
         67.00,29.75 65.88,41.31 61.94,43.06 Z
       M 92.06,52.50" />`}
}

class Hair extends mojs.CustomShape {
  getShape() { return `<path
    d="M 79.50,20.75
       C 79.50,20.75 83.19,25.56 81.88,28.25
         80.56,30.94 74.73,30.32 72.48,29.70
         68.35,32.20 70.50,41.06 69.31,43.00
         68.12,44.94 66.12,43.88 66.12,43.88
         66.12,43.88 66.69,51.19 59.75,51.38
         52.81,51.56 51.12,47.06 51.19,43.38
         51.25,39.69 55.50,36.44 58.69,37.81
         60.50,34.00 65.88,26.19 70.25,24.25
         74.62,22.31 76.75,26.12 78.62,25.56
         80.50,25.00 79.50,20.75 79.50,20.75 Z" />`}
}

mojs.addShape('body', Body)
mojs.addShape('hair', Hair)

const unicornBody = new mojs.Shape({
  shape: 'body',
  fill: 'none',
  stroke: 'white',
  radius: 200,
  duration: 2000,
  strokeDasharray: 220,
  strokeDashoffset: { '-220': 0, easing: 'linear.none' }
}).then({
  fill: { 'none': 'white' },
  duration: 1000,
  onComplete() {
    eye.play()
    hair.play()
  }
}).play()

const eye = new mojs.Shape({
  shape: 'circle',
  fill: 'black',
  radius: 13,
  x: 115,
  y: -60,
  radiusY: { 0: 13 },
})

const hair = new mojs.Shape({
  shape: 'hair',
  fill: 'lavender',
  radius: 200,
  y: { '-800' : 0 },
  duration: 1000,
  easing: mojs.easing.bounce.out,
})
