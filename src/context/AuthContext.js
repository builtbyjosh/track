import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'sign_in':
      return;
    case 'sign_up':
      return;
    case 'sign_out':
      return;
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };
};
const signin = (dispatch) => {
  return ({ email, password }) => {};
};
const signout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false }
);
