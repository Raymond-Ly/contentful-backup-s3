import 'source-map-support/register';

import AWS from 'aws-sdk';
import https from 'https';
import config from '../config';

AWS.config.update({
  httpOptions: {
    agent: new https.Agent({
      maxSockets: config.maxParallelRequests,
    }),
  },
});
