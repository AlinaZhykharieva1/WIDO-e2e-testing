
const cfDecodeEmail = require("./decode-email");
const axios = require('axios');

export const credentials = {};
const urlWithCred = '/phptravels.com/demo/';

module.exports = function requestPageWithCredentials() {
    // const credentials = {};
    axios.get(urlWithCred).then(response => {
        const loginRegexp = /(?<=data-cfemail=")([\s\S]*?)(?=">)/g;
        const passwordRegexp = /(?<=<strong>Password<\/strong>)([\s\S]*?)(?=\n<\/div>)/g;
        credentials.login = cfDecodeEmail(response.body.match(loginRegexp)[0]);
        credentials.password = (response.body.match(passwordRegexp)[0]).trim();
    });
    // return credentials;
}
