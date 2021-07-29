import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

//Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('http://localhost:4000/api/user/register', userData)
    .then((res) => history.push('/login'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

//Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post('http://localhost:4000/api/user/login', userData)
    .then((res) => {
      //save to localStorage
      const { token } = res.data;
      // console.log(res.data);

      localStorage.setItem(
        'user',
        JSON.stringify({ ...res.data.message, token })
      );

      //set token to local storage
      // localStorage.setItem('jwtToken', token);

      //set token to auth header
      setAuthToken(token);

      // //decode token to get user data
      const decoded = jwt_decode(token);

      // console.log(decoded);
      // //set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err,
      })
    );
};

//set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const logoutUser = () => (dispatch) => {
  //remove token from the localstorage
  localStorage.removeItem('jwtToken');

  //remove auth header
  setAuthToken(false);

  //set current user to empty object
  dispatch(setCurrentUser({}));
};
