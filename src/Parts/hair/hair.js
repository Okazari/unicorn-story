import shape from './shape'

const hair = new mojs.Shape({
  shape: shape,
  fill: 'lavender',
  radius: 200,
  y: { '-800' : 0 },
  duration: 1000,
  easing: mojs.easing.bounce.out,
})

export default hair
