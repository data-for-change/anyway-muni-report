'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello World!');
};

// https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/gcf-node6-samples/functions/helloworld/index.js
exports.everyMinute = async (pubSubEvent, context) => {
  // const name = pubSubEvent.data
  //   ? Buffer.from(pubSubEvent.data, 'base64').toString()
  //   : 'World';

  // console.log(`Hello, ${name}!`);

  console.log({ pubSubEvent, context });

  return {
    pubSubEvent,
    context
  };
};
