console.error('HERE BITCH !!!!!!!!!!!!!!!!!!!!!!!!!!!! ',window.callPhantom)
setTimeout(() => {
  console.error('HERE BITCH !!!!!!!!!!!!!!!!!!!!!!!!!!!! ',window.callPhantom)
  alert({ isReady: 'ouech ma gueule' });
 }, 5000);


// Tree
class Tree extends mojs.CustomShape {
  getShape() { return `<path
        d="M 50.00,16.06
           C 50.00,16.06 31.00,41.94 31.00,41.94
             33.00,43.00 33.00,43.00 37.00,44.00
             37.00,44.00 22.00,63.00 22.00,63.00
             25.13,64.94 25.13,64.94 28.94,66.00
             28.94,66.00 14.00,84.00 14.00,84.00
             27.75,92.06 73.44,92.06 86.94,84.06
             86.94,84.06 72.00,66.06 72.00,66.06
             75.94,65.06 75.94,65.06 78.94,63.00
             78.94,63.00 63.94,44.00 63.94,44.00
             68.00,43.06 68.00,43.06 69.88,41.94
             69.88,41.94 50.00,16.06 50.00,16.06 Z" />`}
}

mojs.addShape('tree', Tree)
const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );

const backgroundCircle = new mojs.Shape({
  shape: 'circle',
  fill: '#78db7b',
  radius: {0: 1000, easing: 'cubic.in'},
  isShowStart:  true,
  duration: 1000,
  onComplete () {
    tree.play()
    ball.play()
  },
}).play()

const tree = new mojs.Shape({
  shape: 'tree',
  fill: '#227725',
  duration:  1000,
  radius: 300,
  radiusX: { 0: 300, easing: 'quart.inout'},
  y: -50,
  onComplete () {
    zshape.play()
  },
})

// Logo
class ZShape extends mojs.CustomShape {
  getShape() { return `<path 
        d="M 12.00,1.91
           C 12.00,1.91 79.09,2.00 79.09,2.00
             85.18,3.55 88.00,7.91 89.00,12.09
             89.00,12.09 88.82,88.00 88.82,88.00
             88.55,91.82 83.73,95.73 80.91,97.00
             80.91,97.00 9.91,97.00 9.91,97.00
             7.09,95.36 3.73,92.64 2.00,87.91
             2.00,87.91 1.91,11.91 1.91,11.91
             3.55,6.36 8.09,2.91 12.00,1.91 Z" />`}
}

class K extends mojs.CustomShape {
  getShape() { return `<path 
        d="M 47.45,37.00
           C 47.53,36.88 23.00,36.00 20.27,37.09
             19.36,37.55 17.55,39.82 17.64,41.27
             25.81,38.60 52.64,38.45 63.64,40.55
             68.27,42.36 68.10,39.84 68.55,39.91
             65.09,36.09 59.82,36.91 52.27,36.00
             52.71,36.42 48.81,33.80 48.55,33.55
             49.61,31.70 69.73,20.64 72.64,19.36
             71.73,17.45 70.64,14.82 67.55,14.73
             69.67,15.22 46.67,29.71 43.64,29.00
             33.55,23.53 24.12,15.93 16.45,18.64
             15.12,19.02 14.52,19.91 13.91,21.36
             27.55,20.55 41.82,32.27 47.45,37.00 Z" />`}
}

class N extends mojs.CustomShape {
  getShape() { return `<path 
        d="M 20.00,36.91
           C 20.00,36.91 68.73,34.09 69.00,40.18
             64.45,46.55 26.82,56.18 31.18,57.27
             41.27,59.00 76.55,61.73 76.82,66.36
             74.64,68.91 54.82,63.45 46.55,62.00
             37.64,60.09 17.09,60.18 17.45,58.73
             14.82,54.91 57.55,44.82 60.55,40.27
             60.89,38.72 50.36,39.00 36.00,39.55
             28.97,39.93 26.91,40.73 17.64,40.91
             17.18,38.73 20.00,36.91 20.00,36.91 Z" />`}
}

class Z extends mojs.CustomShape {
  getShape() { return `<path 
        d="M 64.09,56.27
           C 64.42,50.83 68.32,61.90 69.55,71.91
             70.32,78.28 70.84,83.99 65.82,84.91
             63.20,85.19 52.67,76.13 42.00,69.36
             32.28,63.20 22.52,59.15 22.09,61.36
             19.91,80.00 30.55,80.09 26.82,81.45
             22.26,83.03 19.98,81.05 18.09,75.73
             16.83,65.28 17.00,59.09 19.09,57.73
             28.27,53.00 54.27,73.45 63.09,78.91
             65.64,79.18 64.09,56.27 64.09,56.27 Z" />`}
}

mojs.addShape('zshape', ZShape)
mojs.addShape('k', K)
mojs.addShape('n', N)
mojs.addShape('z', Z)

const logoRadius = 30
const logoY = -260
const logoX = 3
const letterDuration = 2000
const zshape = new mojs.Shape({
  shape: 'zshape',
  scale: { 0 : 1, easing: 'quart.inout' },
  angle: { [-180] : 0, easing: 'quart.inout' },
  fill: { 'white': '#b31835'},
  duration:  1000,
  radius: logoRadius,
  isShowStart: true,
  onComplete (isForward, isYoyo) {
    console.log()
    k.play()
    n.play()
    z.play()
  },
  y: logoY,
  x: logoX,
})

const letterStep2 = {
  fill: { 'none' : 'white'},
  duration:  200,
}

const k = new mojs.Shape({
  shape: 'k',
  fill: 'none',
  radius: logoRadius,
  strokeWidth: 0.8,
  strokeDashoffset: { '-245%' : '0%' },
  strokeDasharray: '245%',
  strokeLineCap: 'round',
  stroke: 'white',
  y: logoY,
  x: logoX,
  duration: letterDuration,
}).then(letterStep2)

const n = new mojs.Shape({
  shape: 'n',
  fill: 'none',
  radius: logoRadius,
  strokeWidth: 0.8,
  strokeLineCap: 'round',
  strokeDashoffset: { '-300%' : '0%' },
  strokeDasharray: '300%',
  stroke: 'white',
  y: logoY,
  x: logoX,
  duration: letterDuration,
}).then(letterStep2)

const z = new mojs.Shape({
  shape: 'z',
  fill: 'none',
  radius: logoRadius,
  strokeWidth: 0.8,
  strokeLineCap: 'round',
  strokeDashoffset: { '-215%' : '0%' },
  strokeDasharray: '215%',
  stroke: 'white',
  y: logoY,
  x: logoX,
  duration: letterDuration,
}).then(letterStep2)

const ball = new mojs.Shape({
  shape: 'circle',
  fill: '#b31835',
  radius: 20,
  duration: 1500,
  x: -70,
  onUpdate: function (progress) {
    let bounceProgress = mojs.easing.bounce.out(progress);
    ball.tune({ y: bounceProgress*200 - 100})
  }
})
