/**
 * Compatibility shim for tap 21 (@tapjs/asserts) and other removed tap 12
 * method name aliases.
 *
 * The upgrade from tap 12 to tap 21 dropped a number of assertion method
 * name aliases that tap 12's `Assertions` class used to expose (`equals`,
 * `strictEqual(s)`, `notEqual(s)`, `notStrictEqual(s)`, `deepEqual(s)`,
 * `notDeepEqual(s)`, `strictDeepEqual(s)`, `notStrictDeepEqual(s)`, `true`,
 * `false`, `assert`). Modern tap's `equal()` already performs a strict
 * (`===`) comparison internally, and `same()`/`notSame()`/`strictSame()`/
 * `strictNotSame()`/`ok()` cover the remaining cases, so these are
 * behaviorally identical to their tap 12 counterparts - only the names were
 * removed.
 *
 * It also re-adds `t.tearDown` (tap 12's camelCase spelling), which tap 21's
 * `@tapjs/after` plugin renamed to `t.teardown`.
 *
 * Rather than rewriting the hundreds of call sites across the existing test
 * suite (risking typos/behavior drift), this file re-adds the old names as
 * thin aliases on the shared prototypes that tap's plugins use for every `t`
 * object. It is loaded via Node's `--require` flag (see the `node-arg` entry
 * in the `tap` config in package.json), before any test file runs.
 */


const {Assertions} = require('@tapjs/asserts');
const {After} = require('@tapjs/after');

if (!Object.prototype.hasOwnProperty.call(After.prototype, 'tearDown')) {
    After.prototype.tearDown = function (...args) {
        return this.teardown(...args);
    };
}

const aliases = {
    equals: 'equal',
    notEqual: 'not',
    notEquals: 'not',
    strictEqual: 'equal',
    strictEquals: 'equal',
    notStrictEqual: 'not',
    notStrictEquals: 'not',
    deepEqual: 'same',
    deepEquals: 'same',
    notDeepEqual: 'notSame',
    notDeepEquals: 'notSame',
    strictDeepEqual: 'strictSame',
    strictDeepEquals: 'strictSame',
    notStrictDeepEqual: 'strictNotSame',
    notStrictDeepEquals: 'strictNotSame',
    true: 'ok',
    false: 'notOk',
    assert: 'ok'
};

Object.keys(aliases).forEach(oldName => {
    const newName = aliases[oldName];
    if (!Object.prototype.hasOwnProperty.call(Assertions.prototype, oldName)) {
        Assertions.prototype[oldName] = function (...args) {
            return this[newName](...args);
        };
    }
});
