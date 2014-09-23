# ❄ Icicle

Tiny mutex.

`$ npm install icicle`

```js
var icicle = require('icicle');

var a = {};

icicle.freeze(a, 'waitABit'); // true - lock was set
icicle.freeze(a, 'waitABit'); // false - lock was already set

icicle.isFrozen(a, 'waitABit'); // true

icicle.unfreeze(a, 'waitABit'); // true - lock was unset
icicle.unfreeze(a, 'waitABit'); // false - lock wasn’t set

icicle.isFrozen(a, 'waitABit'); // false
```

## License

MIT
