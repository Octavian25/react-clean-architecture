export const PAGE_LOADED_LOGIN = '[ui] page loaded login';
export const SET_LOADING_ON = '[ui] page loading on';
export const SET_LOADING_OFF = '[ui] page loading off';

// ini adalah action yang nantinya akan dipanggil di middleware
export const pageLoadedLogin = {
  type: PAGE_LOADED_LOGIN,
};

export const setLoading = (isLoading) => ({
  type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
  payload: isLoading,
});
