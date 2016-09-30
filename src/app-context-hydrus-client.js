import got from 'got';
import urlJoin from './url-join';
import HydrusClient from './hydrus-client';

async function getOperations(registryUrl, serviceName) {
  const url = urlJoin(registryUrl, 'services', serviceName, 'operations');
  const { body: operations } = await got(url, { json: true });
  const client = new HydrusClient(`http://${serviceName}`);

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
        for (let op of operations) {
          service[serviceName][op.name] = op.execute;
        }
      })
    );

    context.service = service;
  };
}

export default appContextHydrusClient;
