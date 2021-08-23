import axios from 'axios';

const AxiosPut = async (url, data) => {
  try {
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
        language: 'id-ID',
      },
      timeout: 4000,
    };
    const response = await axios.put(url, data, config);
    return { value: response.data, error: null };
  } catch (error) {
    return { value: null, error: error.response };
  }
};

export default AxiosPut;
