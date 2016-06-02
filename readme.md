# eslint-config-kapgel

[![npm version](https://badge.fury.io/js/eslint-config-kapgel.svg)](http://badge.fury.io/js/eslint-config-kapgel)
[![Dependency Status](https://david-dm.org/kapgel/eslint-config-kapgel.svg)](https://david-dm.org/kapgel/eslint-config-kapgel)
[![DevDependency Status](https://david-dm.org/kapgel/eslint-config-kapgel/dev-status.svg)](https://david-dm.org/kapgel/eslint-config-kapgel#info=devDependencies)
[![PeerDependency Status](https://david-dm.org/kapgel/eslint-config-kapgel/peer-status.svg)](https://david-dm.org/kapgel/eslint-config-kapgel#info=peerDependencies)
[![Build Status](https://travis-ci.org/kapgel/eslint-config-kapgel.svg?branch=master)](https://travis-ci.org/kapgel/eslint-config-kapgel)


This package is based on Airbnb config and provides kapgel's .eslintrc as an extensible shared config.

## Usage

### eslint-config-kapgel/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm install --save-dev eslint-config-kapgel eslint`
2. add `"extends": "kapgel/legacy"` to your .eslintrc

* We will add ES6 support later

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`. [WIP]

You can make sure this module lints with itself using `npm run lint`. [WIP]
