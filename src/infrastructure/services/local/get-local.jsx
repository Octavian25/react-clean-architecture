const getLocal = (nama) => {
  return JSON.parse(localStorage.getItem(nama));
};

export default getLocal;
