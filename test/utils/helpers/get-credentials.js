const axios = require('axios');
const cfDecodeEmail = require('./decode-email');

const urlWithCred = 'https://phptravels.com/demo/';

async function requestPageWithCredentials() {
  const credentials = {};
  return axios.get(urlWithCred)
    .then((response) => {
      const loginRegexp = /(?<=data-cfemail=")([\s\S]*?)(?=">)/g;
      const passwordRegexp = /(?<=<strong>Password<\/strong>)([\s\S]*?)(?=\n<\/div>)/g;
      credentials.login = cfDecodeEmail(response.data.match(loginRegexp)[0]);
      credentials.password = (response.data.match(passwordRegexp)[0]).trim();
      return credentials;
    })
    .catch((err) => (err));
}

export default requestPageWithCredentials;
