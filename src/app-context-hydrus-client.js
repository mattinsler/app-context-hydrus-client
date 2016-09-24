import HydrusClient from './hydrus-client';

function appContextHydrusClient(endpoints = []) {
  return async (context) => {
    const service = {};

    await Promise.all(
      endpoints.map(async (endpoint) => {
        const client = new HydrusClient(endpoint);
        const services = await client.get('__services');
        services.forEach((s) => {
          const [name, operation] = s.name.split('.');
          if (!service[name]) { service[name] = {}; }
          service[name][operation] = function(data = {}) {
            return client.post(s.name, data);
          };
        });
      })
    );

    context.service = service;
  };
}

export default appContextHydrusClient;
