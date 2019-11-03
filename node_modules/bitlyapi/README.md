This is the API of bitly.com

[![Build Status](https://travis-ci.org/kishanmadhesiya/bitly.svg?branch=master)](https://travis-ci.org/kishanmadhesiya/bitly/)
[![npm version](https://badge.fury.io/js/bitlyapi.png)](https://badge.fury.io/js/bitlyapi)

## Installation

Using NPM `npm install bitlyapi`

Using GIT `git clone https://github.com/kishanmadhesiya/bitly.git`

## Usage

You need 'ACCESS TOKEN' from bitly.com. Visit: https://bitly.com/a/oauth_apps

Check http://dev.bitly.com/ for more info.

#### Code

```js
// For ES2015/ES6

import Bitly from 'bitlyapi';

let bitly = new Bitly('<ACCESS TOKEN>');

bitly.shorten('http://nodejs.org', (response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});


// For ES5

var Bitly = require('bitlyapi');
var bitly = new Bitly('<ACCESS TOKEN>');

bitly.shorten('https://github.com/kishanmadhesiya/bitly')
  .then(function(response) {
    console.log(response);
  }, function(error) {
    console.log(error);
  });
```

### Bit.ly Api Features

* shorten()
uses:- shorten(LONG_URL)

* expand()  
uses:- expand(BITLY_HASH) or expand([SHORT_URL, BITLY_HASH]) or expand(SHORT_URL)

* clicks()  
uses:- clicks(BITLY_HASH) or clicks([SHORT_URL, BITLY_HASH]) or clicks(SHORT_URL)

* clicksByMinute()
uses:- clicksByMinute(BITLY_HASH) or clicksByMinute([SHORT_URL, BITLY_HASH]) or clicksByMinute(SHORT_URL)


* clicksByDay()
uses:- clicksByDay(BITLY_HASH) or clicksByDay([SHORT_URL, BITLY_HASH]) or clicksByDay(SHORT_URL)

* referrers()
uses:- referrers(SHORT_URL) or referrers(BITLY_HASH)

* countries()
uses:- countries(BITLY_HASH) or countries(SHORT_URL)

* bitlyProDomain()
uses:- bitlyProDomain(LONG_URL)

* lookup()
uses:- lookup([LONG_URL, 'http://kishanmadhesiya.com']) or lookup(LONG_URL)

* info()
info(BITLY_HASH) or info([SHORT_URL, BITLY_HASH]) or info(SHORT_URL)

* history()
uses:- history()

* linkEdit()
uses:- linkEdit(metadata_field, link, new_value)


## Tests
To run tests type `npm test`.
For coverage type `npm run coverage`
