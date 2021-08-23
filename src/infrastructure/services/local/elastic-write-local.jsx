export const encryptascii = (str) => {
  let key = process.env.REACT_APP_ENCKEY;

  let dataKey = {};
  for (let i = 0; i < key.length; i++) {
    dataKey[i] = key.substr(`${i}`, 1);
  }

  let strEnc = '';
  let nkey = 0;
  let jml = str.length;

  for (let i = 0; i < parseInt(jml); i++) {
    strEnc = strEnc + hexEncode(str[i].charCodeAt(0) + dataKey[nkey].charCodeAt(0));

    if (nkey === Object.keys(dataKey).length - 1) {
      nkey = 0;
    }
    nkey = nkey + 1;
  }
  return strEnc.toUpperCase();
};

export const decryptascii = (str) => {
  if (str !== null) {
    let key = process.env.REACT_APP_ENCKEY;
    let dataKey = {};
    for (let i = 0; i < key.length; i++) {
      dataKey[i] = key.substr(`${i}`, 1);
    }

    let strDec = '';
    let nkey = 0;
    let jml = str.length;
    let i = 0;
    while (i < parseInt(jml)) {
      strDec = strDec + chr(hexdec(str.substr(i, 2)) - dataKey[nkey].charCodeAt(0));
      if (nkey === Object.keys(dataKey).length - 1) {
        nkey = 0;
      }
      nkey = nkey + 1;
      i = i + 2;
    }
    return strDec;
  }
};
export const hexEncode = (str) => {
  var result = '';
  result = str.toString(16);
  return result;
};

export const hexdec = (hex) => {
  var str = '';
  str = parseInt(hex, 16);
  return str;
};
export const chr = (asci) => {
  var str = '';
  str = String.fromCharCode(asci);
  return str;
};

const writeLocal = (nama, data) => {
  return localStorage.setItem(nama, encryptascii(JSON.stringify(data)));
};

export default writeLocal;
