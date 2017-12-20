import shape from './shape'

const body = new mojs.Shape({
  shape: shape,
  fill: 'none',
  stroke: 'white',
  radius: 200,
  duration: 2000,
  strokeDasharray: '220',
  strokeDashoffset: { '-220': 0, easing: 'linear.none' }
}).then({
  fill: { 'none': 'white' },
  duration: 1000,
})

export default body
