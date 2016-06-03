'use strict';

module.exports = {
  extends: 'airbnb/legacy',
  plugins: ['json'],
  env: {
    mocha: true,
    browser: true,
    jquery: true,
    mongo: true,
    node: true
  },
  rules: {
    'func-names': 'off',
    'vars-on-top': 'off',
    'max-len': [2, 100, 2, { ignoreUrls: true }],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id'
        ]
      }
    ],
    'no-param-reassign': 'off',
    'global-require': 'off'
  }
};
