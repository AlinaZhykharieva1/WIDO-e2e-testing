module.exports = function cfDecodeEmail(encodedString) {
  let email = '';
  const r = parseInt(encodedString.substr(0, 2), 16);
  let n;
  let i;
  for (n = 2; encodedString.length - n; n += 2) {
    i = parseInt(encodedString.substr(n, 2), 16) ^ r;
    email += String.fromCharCode(i);
  }
  return email;
};
