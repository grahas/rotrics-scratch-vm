module.exports = {
    extends: ['scratch', 'scratch/node', 'scratch/es6'],
    rules: {
        // These rules were not enforced under the previous eslint/eslint-config-scratch
        // versions. The underlying code predates this dependency upgrade and changing it
        // now would mean altering the shape of values the public API rejects promises
        // with (a behavior change for npm-link consumers) and touching hundreds of
        // call sites across the codebase. Disabled here to keep this upgrade focused on
        // tooling, not a source-wide rewrite. (src/ has its own root:true config with the
        // same overrides since it doesn't inherit from this file.)
        'no-prototype-builtins': 'off',
        'prefer-promise-reject-errors': 'off'
    }
};
