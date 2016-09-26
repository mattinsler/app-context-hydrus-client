import got from 'got';
import urlJoin from './url-join';
import HydrusClient from './hydrus-client';

async function getOperations(registryUrl, serviceName) {
  const url = urlJoin(registryUrl, 'services', serviceName, 'operations');
  const { body: operations } = await got(url, { json: true });
  const client = new HydrusClient(`http://${serviceName}`);
  // const client = new HydrusClient(`http://localhost:3003`);

  return operations.map(({ service, name }) => ({
    name,
    service,
    client,
    execute: (data) => client.post(`${service}.${name}`, data)
  }));
}

function appContextHydrusClient(registryUrl, services = []) {
  return async (context) => {
    const service = {};

    await Promise.all(
      services.map(async (serviceName) => {
        service[serviceName] = {};
        const operations = await getOperations(registryUrl, serviceName);
        operations.forEach(({ name, execute }) => {
          service[serviceName][name] = execute;
        });
      })
    );

    context.service = service;
  };
}

export default appContextHydrusClient;
