'use strict';

const Bitly = require('../src/bitly');
const bitly_token = 'fbc73f4962d38a128aaa176453dac43f04018b8b';
const LONG_URL = 'http://kishanmadhesiya.com';
const SHORT_URL = 'http://bit.ly/2teiL78';
const BITLY_HASH = 'kIsh';

describe('Shorten_URL', function() {
  describe('#shorten()', function() {
    it('should return a success', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.shorten(LONG_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Expand', function() {
  describe('#expand()', function() {
    it('should return a success for hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.expand(BITLY_HASH).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Expand', function() {
  describe('#expand()', function() {
    it('should return a success for mixed url hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.expand([SHORT_URL, BITLY_HASH]).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Expand', function() {
  describe('#expand()', function() {
    it('should return a success for short url', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.expand(SHORT_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Info', function() {
  describe('#info()', function() {
    it('should return a success for short url', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.info(SHORT_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Info', function() {
  describe('#info()', function() {
    it('should return a success for hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.info(BITLY_HASH).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Info', function() {
  describe('#info()', function() {
    it('should return a success for mixed url hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.info([SHORT_URL, BITLY_HASH]).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Clicks', function() {
  describe('#clicks()', function() {
    it('should return a success for short url', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.clicks(SHORT_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Clicks', function() {
  describe('#clicks()', function() {
    it('should return a success for hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.clicks(BITLY_HASH).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Clicks', function() {
  describe('#clicks()', function() {
    it('should return a success for mixed url hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.clicks([SHORT_URL, BITLY_HASH]).then((result) => {
        done();
      }, done)
    });
  });
});

describe('ClicksByDay', function() {
  describe('#clicksByDay()', function() {
    it('should return a success for short url', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.clicksByDay(SHORT_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('ClicksByDay', function() {
  describe('#clicksByDay()', function() {
    it('should return a success for hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.clicksByDay(BITLY_HASH).then((result) => {
        done();
      }, done)
    });
  });
});

describe('ClicksByDay', function() {
  describe('#clicksByDay()', function() {
    it('should return a success for mixed url hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.clicksByDay([SHORT_URL, BITLY_HASH]).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Referrers', function() {
  describe('#referrers()', function() {
    it('should return a success for short url', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.referrers(SHORT_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Referrers', function() {
  describe('#referrers()', function() {
    it('should return a success for hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.referrers(BITLY_HASH).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Countries', function() {
  describe('#countries()', function() {
    it('should return a success for short url', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.countries(SHORT_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Countries', function() {
  describe('#countries()', function() {
    it('should return a success for hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.countries(BITLY_HASH).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Lookup', function() {
  describe('#lookup()', function() {
    it('should return a success for short url', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.lookup(LONG_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('Lookup', function() {
  describe('#lookup()', function() {
    it('should return a success for hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.lookup([LONG_URL, 'http://nodejs.org']).then((result) => {
        done();
      }, done)
    });
  });
});

describe('History', function() {
  describe('#history()', function() {
    it('should return a success for history', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.history().then((result) => {
        done();
      }, done)
    });
  });
});

describe('ClicksByMinute', function() {
  describe('#clicksByMinute()', function() {
    it('should return a success for short url', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.clicksByMinute(SHORT_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('ClicksByMinute', function() {
  describe('#clicksByMinute()', function() {
    it('should return a success for hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.clicksByMinute(BITLY_HASH).then((result) => {
        done();
      }, done)
    });
  });
});

describe('ClicksByMinute', function() {
  describe('#clicksByMinute()', function() {
    it('should return a success for mixed url hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.clicksByMinute([SHORT_URL, BITLY_HASH]).then((result) => {
        done();
      }, done)
    });
  });
});

describe('BitlyProDomain', function() {
  describe('#bitlyProDomain()', function() {
    it('should return a success for hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.bitlyProDomain(LONG_URL).then((result) => {
        done();
      }, done)
    });
  });
});

describe('LinkEdit', function() {
  describe('#linkEdit()', function() {
    it('should return a success for hash', function(done) {
      var bitly = new Bitly(bitly_token);
      bitly.linkEdit('meta',LONG_URL,'xyz').then((result) => {
        done();
      }, done)
    });
  });
});
