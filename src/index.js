import { chain } from 'popmotion'

import {
  backgroundCircle,
  body,
  hair,
  tail,
  horn
} from './Parts'

chain(
  backgroundCircle,
  body,
  hair,
  tail,
  horn
).start()