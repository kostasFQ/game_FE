import axios from 'axios';

const makeCall = async (url, data) => {
  let method = 'get';
  if (data && Object.keys(data).length !== 0) { method = 'post' }

  return await axios({
    url,
    method,
    data
  });
}

export default makeCall;