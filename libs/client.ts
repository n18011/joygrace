import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.microcms_domain,  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: process.env.microcms_apiKey,
});