const url = () => process.env.REACT_APP_API_URL;

export const saveResultUrl = () => `${url()}/save`;
export const leaderBoard = (count = 5) => `${url()}/leader-board?count=${count}`;