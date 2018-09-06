
  const request = require('request-promise');

function climatempo(currency = 'USD', amount = 1){

  const url = 'http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token=1bbc72a29b8f9a44003001b3dc915598';

  return request(url)
    .then((body) => {
      console.log(JSON.parse(body))
      return body;
    })
    .then((body) => {
      const apiResponse = JSON.parse(body);
      console.info(`In `);
    })
    .catch((err) => {
      console.info('Something went wrong in the API. Try in a few minutes.');
      return err;
    });

}

module.exports = climatempo;