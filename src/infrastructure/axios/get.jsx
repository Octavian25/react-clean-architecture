import axios from 'axios';

const AxiosGet = async ({ url }) => {
  try {
    let percentCompleted = 0;
    let config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
        language: 'id-ID',
      },
      onUploadProgress: (progressEvent) => {
        percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
      },
      timeout: 4000,
    };
    const response = await axios.get(url, config);
    return {
      value: response.data,
      error: null,
      percentCompleted: percentCompleted,
    };
  } catch (error) {
    return {
      value: null,
      error: error.response,
    };
  }
};

export default AxiosGet;
