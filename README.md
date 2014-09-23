# ❄ Icicle

Tiny mutex.

`$ npm install icicle`

```js
var icicle = require('icicle');

var a = {};

icicle.freeze(a, 'waitABit'); // true - lock is set
icicle.freeze(a, 'waitABit'); // false - lock is already set

icicle.isFrozen(a, 'waitABit'); // true

icicle.unfreeze(a, 'waitABit'); // true - lock is unset
icicle.unfreeze(a, 'waitABit'); // false - lock isn’t set

icicle.isFrozen(a, 'waitABit'); // false
```

## License

MIT
