import axios from 'axios';

const AxiosPost = async ({ url, data }) => {
  try {
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
        language: 'id-ID',
      },
      timeout: 4000,
    };
    const response = await axios.post(url, data, config);
    return { value: response.data, error: null };
  } catch (error) {
    return { value: null, error: error.response };
  }
};

const AxiosPostLogin = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return { value: response.data, error: null };
  } catch (error) {
    return { value: null, error: error.response };
  }
};
const listExport = { AxiosPost, AxiosPostLogin };

export default listExport;
