'use strict';

const url = require('url');
const isUri = require('valid-url').isUri;
const Boom = require('boom');
const fetch = require('node-fetch');


class Bitly {

  constructor(accessToken) {
    this.accessToken = accessToken;
    this.format = 'json';
    this.api_url = 'api-ssl.bitly.com';
    this.api_version = 'v3';
    this.domain = 'bit.ly';
  }

  bitlyProDomain (domain) {
    return this.makeRequestToAPI(this.create_Url({format: this.format,domain: domain}, 'bitly_pro_domain'));
  }

  sortUrls_Hash (items, query) {
    let shortUrl = [];
    let hash = [];

    // If only passed one item, put in array for url checking
    if (typeof items === 'string') {
      items = [items];
    }
    items.forEach((item) => {
      isUri(item) ? shortUrl.push(item) : hash.push(item);
    });

    if (shortUrl.length > 0) {
      query.shortUrl = shortUrl;
    }
    if (hash.length > 0) {
      query.hash = hash;
    }
  }

  shorten (longUrl, domain) {
    var query = {
      format: this.format,
      longUrl: longUrl,
      domain: domain ? domain : this.domain
    };

    return this.makeRequestToAPI(this.create_Url(query, 'shorten'));
  }

  history () {
    return this.makeRequestToAPI(this.create_Url({}, 'user/link_history'));
  }

  expand (items) {
    var query = {
      format: this.format,
      domain: this.domain
    };

    this.sortUrls_Hash(items, query);

    return this.makeRequestToAPI(this.create_Url(query, 'expand'));
  }

  info (items) {
    var query = {
      format: this.format,
      domain: this.domain
    };

    this.sortUrls_Hash(items, query);

    return this.makeRequestToAPI(this.create_Url(query, 'info'));
  }

  clicksByDay (items) {
    var query = {
      format: this.format,
      domain: this.domain
    };

    this.sortUrls_Hash(items, query);

    return this.makeRequestToAPI(this.create_Url(query, 'clicks_by_day'));
  }

  lookup (links) {
    var query = {
      format: this.format,
      url: links,
      domain: this.domain
    };
    return this.makeRequestToAPI(this.create_Url(query, 'lookup'));

  }

  clicks (items) {
    var query = {
      format: this.format,
      domain: this.domain
    };

    this.sortUrls_Hash(items, query);

    return this.makeRequestToAPI(this.create_Url(query, 'clicks'));
  }

  referrers (link) {
    var query = {
      format: this.format,
      domain: this.domain
    };

    query[isUri(link) ? 'shortUrl' : 'hash'] = link;

    return this.makeRequestToAPI(this.create_Url(query, 'referrers'));
  }

  countries (link) {
    var query = {
      format: this.format,
      domain: this.domain
    };
    query[isUri(link) ? 'shortUrl' : 'hash'] = link;

    return this.makeRequestToAPI(this.create_Url(query, 'countries'));
  }

  linkEdit (metadata_field, link, new_value) {
    var query = {
      link: link
    };

    if (Array.isArray(metadata_field) && Array.isArray(new_value)) {
      query['edit'] = metadata_field.join(',');
      metadata_field.forEach((field, index) => {
        query[field] = new_value[index];
      });
    } else {
      query['edit'] = metadata_field;
      query[metadata_field] = new_value;
    }

    return this.makeRequestToAPI(this.create_Url(query, 'user/link_edit'));
  }

  clicksByMinute (items) {
    var query = {
      format: this.format,
      domain: this.domain
    };

    this.sortUrls_Hash(items, query);

    return this.makeRequestToAPI(this.create_Url(query, 'clicks_by_minute'));

  }

  create_Url(query, method){
    query['access_token'] = this.accessToken;

    return url.parse(url.format({
      protocol: 'https',
      hostname: this.api_url,
      pathname: '/' + this.api_version + '/' + method,
      query: query
    }));
  }

  makeRequestToAPI (requestUri) {
    return new Promise((resolve, reject) => {
      return fetch(requestUri)
        .then((response) => {
        return resolve(response.json());
        });
    });
  }

}
module.exports = Bitly;
