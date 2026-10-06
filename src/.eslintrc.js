module.exports = {
    root: true,
    extends: ['scratch', 'scratch/es6'],
    env: {
        browser: true
    },
    rules: {
        // These rules were not enforced under the previous eslint/eslint-config-scratch
        // versions. The underlying code predates this dependency upgrade and changing it
        // now would mean altering the shape of values the public API rejects promises
        // with (a behavior change for npm-link consumers) and touching hundreds of
        // call sites across the codebase. Disabled here to keep this upgrade focused on
        // tooling, not a source-wide rewrite.
        'no-prototype-builtins': 'off',
        'prefer-promise-reject-errors': 'off'
    }
};
