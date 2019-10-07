export const INCREMENT = 'INCREMENT';

export const increment = () => dispatch => {
  dispatch( {type: INCREMENT } );
}