import './style.css';
import {
  diff,
  addedDiff,
  deletedDiff,
  updatedDiff,
  detailedDiff,
} from 'deep-object-diff';

import {
  mergeWith,
  isEqual,
  cloneDeep,
  forEach,
  isPlainObject,
  unset,
  isArray,
  set,
  get,
} from 'lodash';

import * as lhs from './generated.json';
import * as rhs from './generated-1.json';

console.time('time');
const df = diff(lhs.default, rhs.default);
console.log(df);
console.timeEnd('time');
