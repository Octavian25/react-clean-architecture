import post from '../../../axios/post';
import word from '../../../shared/static';

const login = {
  doLogin: async (data) => {
    const response = await post.AxiosPostLogin(word.URL_LOGIN, data);
    return response;
  },
};

export default login;
