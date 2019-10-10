const url = () => {
  return process.env.REACT_APP_DEV ?
    process.env.REACT_APP_API_URL_DEV :
    process.env.REACT_APP_API_URL_PROD;
}

export const saveResult = () => `${url()}/save`