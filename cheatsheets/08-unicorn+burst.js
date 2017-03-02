const backgroundCircle = new mojs.Shape({
  shape:'circle',
  radius: {0: 300},
  duration: 1000,
  fill: 'darkcyan',
  onComplete(){
    body.play()
  }
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

class Tail extends mojs.CustomShape {
  getShape() { return `<path
    d="M 7.09,62.65
       C 9.96,65.65 12.09,64.26 12.57,63.57
         13.74,62.78 11.70,53.00 14.70,48.65
         17.70,44.30 21.65,42.43 24.74,42.43
         27.83,42.43 31.57,43.83 31.78,47.39
         30.83,47.96 27.78,52.52 27.52,55.65
         27.52,55.65 23.30,54.87 23.43,59.65
         23.57,64.43 22.22,71.48 16.26,72.65
         10.30,73.83 4.83,67.52 7.09,62.65 Z" />`}
}

class Horn extends mojs.CustomShape {
  getShape() { return `<path
    d="M 90.65,15.04
       C 91.61,15.65 84.09,30.17 83.74,30.22
         81.52,30.43 79.30,29.26 78.74,28.09
         78.78,28.00 89.70,14.43 90.65,15.04 Z" />`}
}

mojs.addShape('body', Body)
mojs.addShape('hair', Hair)
mojs.addShape('tail', Tail)
mojs.addShape('horn', Horn)

const horn = new mojs.Shape({
  shape: 'horn',
  fill: 'aquamarine',
  radius: 200,
  duration: 1500,
  y: { 100: 0 },
  x: { '-40': 0 }
})

const body = new mojs.Shape({
  shape: 'body',
  fill: 'none',
  stroke: 'white',
  radius: 200,
  duration: 2000,
  strokeDasharray: '220',
  strokeDashoffset: { '-220': 0, easing: 'linear.none' }
}).then({
  fill: { 'none': 'white' },
  duration: 1000,
  onComplete() {
    horse.play()
  }
})

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

const tail = new mojs.Shape({
  shape: 'tail',
  duration: 1000,
  radius: 200,
  x: { '-800': 0 },
  easing: mojs.easing.bounce.out,
  fill: 'pink'
})

const horse = new mojs.Timeline({
  onComplete() {
    horn.play()
  }
})
.add(hair)
.add(tail)
.add(eye)

const burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 4: 19 },
  angle: 45,
  children: {
    shape: 'line',
    radius: 3,
    scale: 1,
    stroke: '#FD7932',
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '100%' },
    duration: 700,
    easing: 'quad.out',
  }
});

document.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .replay();
} );
