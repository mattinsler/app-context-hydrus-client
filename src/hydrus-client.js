import got from 'got';

function urlJoin(...parts) {
  return parts.map((p, idx) => {
    if (idx === 0) {
      return p.replace(/\/+$/, '');
    } else {
      return p.replace(/^\/+/, '');
    }
  }).join('/');
}

class HydrusClient {
  constructor(url) {
    this.url = url;
  }

  async request(method, url, data) {
    const opts = {
      method,
      headers: {
        'user-agent': 'hydrus/0.0.1'
      },
      json: true
    };

    if (data && Object.keys(data).length > 0) {
      if (method.toLowerCase() === 'get') {
        opts.query = data;
      } else {
        opts.body = JSON.stringify(data);
        opts.headers['content-type'] = 'application/json';
      }
    }

    try {
      const res = await got(url, opts);
      return res.body;
    } catch (err) {
      err.error = err.response.body.error;
      console.log(err.error);

      throw err;
    }
  }

  get(pathname = '/', data) {
    return this.request('get', urlJoin(this.url, pathname), data);
  }

  post(pathname = '/', data) {
    return this.request('post', urlJoin(this.url, pathname), data);
  }
}

export default HydrusClient;
