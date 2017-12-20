import shape from './shape'

const tail = new mojs.Shape({
  shape: shape,
  duration: 1000,
  radius: 200,
  x: { '-800': 0 },
  easing: mojs.easing.bounce.out,
  fill: 'pink'
})

export default tail
