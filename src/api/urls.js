const url = () => {
  return process.env.REACT_APP_DEV ?
    process.env.REACT_APP_API_URL_DEV :
    process.env.REACT_APP_API_URL_PROD;
}

export const saveResultUrl = () => `${url()}/save`;
export const leaderBoard = () => `${url()}/leader-board`;