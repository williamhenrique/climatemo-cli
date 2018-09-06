const request = require('request-promise-native');

function climatempo(locale = 3477) {
  let url = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token=1bbc72a29b8f9a44003001b3dc915598';

  return request(url).then(body => {
    spinner.stop();
    return body;
  }).then(body => {
    const apiResponse = JSON.parse(body);
    console.log(body);
    //console.info(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(apiResponse.price)}`);
  }).catch(err => {
    spinner.stop();
    //console.info(chalk.red('Something went wrong in the API. Try in a few minutes.'));
    return err;
  });
}

module.exports = climatempo;