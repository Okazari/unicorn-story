import { chain } from 'popmotion'
import { tween, styler, composite } from 'popmotion'

import {
  backgroundCircle,
  body,
  hair,
  tail,
  horn,
  eye
} from './Parts'

chain(
  backgroundCircle,
  body,
  eye,
  composite({
    hair,
    tail,
  }),
  horn
).start()
