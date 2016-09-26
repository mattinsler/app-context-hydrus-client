import got from 'got';
import urlJoin from './url-join';

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
      if (err.code === 'ENOTFOUND') {
        throw err;
      }
      err.error = err.response.body.error;
      err.message = `${err.statusMessage}[${err.statusCode}]: ` + err.error.join('.') + '.';

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
