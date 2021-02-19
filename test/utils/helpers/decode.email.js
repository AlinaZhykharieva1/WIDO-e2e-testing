export default function cfDecodeEmail(encodedString) {
  let email = '';
  const r = parseInt(encodedString.substr(0, 2), 16);
  for (let n = 2; encodedString.length - n; n += 2) {
    let i = parseInt(encodedString.substr(n, 2), 16) ^ r;
    email += String.fromCharCode(i);
  }
  return email;
};
