var icicle = require('../index');
var assert = require('better-assert');

describe('Icicle', function(){
	it('lock objects', function(){
		var a = {};

		assert(icicle.freeze(a, 1));
		assert(!icicle.freeze(a, 1));
		assert(icicle.isFrozen(a, 1));
		assert(icicle.unfreeze(a, 1));
		assert(!icicle.unfreeze(a, 1));
		assert(!icicle.isFrozen(a, 1));
	});
});