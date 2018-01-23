import { backgroundCircle, body, hair, tail, eye, horn } from './Parts'
import { chain, composite } from 'popmotion'

chain(
  backgroundCircle,
  body,
  composite({
    hair,
    tail,
  }),
  eye,
  horn,
).start()
