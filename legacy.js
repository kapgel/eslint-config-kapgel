'use strict';

module.exports = {
  extends: 'airbnb/legacy',
  plugins: ['json'],
  rules: {
    'func-names': 'off',
    'vars-on-top': 'off',
    'max-len': [2, 100, 2, { ignoreUrls: true }]
  }
};
