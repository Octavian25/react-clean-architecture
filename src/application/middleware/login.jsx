import * as sweetalert from '../../infrastructure/shared/sweetalert';
import { loginFailed, loginSuccess, SEND_LOGIN } from '../actions/login';
import { setLoading } from '../actions/ui';

/**
({api}) ADALAH PARAMETER YANG DIDAPAT DARI FOLDER INFRASTRUCTURE -> SERVICES -> API 
{ DISINI JUGA BISA MEMANGGIL FOLDER YANG LAIN, SEPERTI LOGGER,
   DLL ASALKAN SUDAH TERDAFTAR DI INDEX SERVICE}
   
 */

const handleLoginFlow =
  ({ api, writeLocal }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);

    if (action.type === SEND_LOGIN) {
      dispatch(setLoading(true));
      const data = getState().form.LoginForm.values;
      const response = await api.login.doLogin(data);
      if (response?.value !== null) {
        dispatch(loginSuccess(response?.value));
        writeLocal('userInfo', response?.value);
        sweetalert.default.Success('Berhasil Login');
        dispatch(setLoading(false));
      } else {
        dispatch(loginFailed(response?.error));
        sweetalert.default.Failed('Coba Check Email Dan Passwordnya..');
        dispatch(setLoading(false));
      }
    }
  };

const data = [handleLoginFlow];

export default data;
