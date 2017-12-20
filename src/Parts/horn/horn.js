import shape from './shape'

const horn = new mojs.Shape({
  shape: shape,
  fill: 'aquamarine',
  radius: 200,
  duration: 1500,
  y: { 100: 0 },
  x: { '-40': 0 }
})

export default horn
