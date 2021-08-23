const writeLocal = (nama, data) => {
  return localStorage.setItem(nama, JSON.stringify(data));
};

export default writeLocal;
