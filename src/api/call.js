import axios from 'axios';

const makeCall = async (url, data) => {
  try {
    let method = 'get';
    if (data && Object.keys(data).length !== 0) { method = 'post' }
  
    return await axios({
      url,
      method,
      data
    });
  } catch(err) {
    throw Error(err);
  }
}

export default makeCall;