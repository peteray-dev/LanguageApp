import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import {
  GET_CURRENT_USER,
  GET_ERRORS,
  SET_CURRENT_USER,
  LOGIN,
  LOGOUT,
  GET_LOGIN_ERR,
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERR,
} from './types';

//Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post('http://localhost:4000/api/user/register', userData)
    .then(({ data }) => {
      localStorage.setItem(
        'user',
        JSON.stringify({ ...data?.message, token: data.token })
      );
      return dispatch({
        type: LOGIN,
        payload: { status: data.status, ...data.message },
      });
    })
    .catch(({ response }) => {
      return dispatch({
        type: GET_LOGIN_ERR,
        payload: response?.data,
      });
    });
};

//Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post('http://localhost:4000/api/user/login', userData)
    .then(({ data }) => {
      localStorage.setItem(
        'user',
        JSON.stringify({ ...data?.message, token: data.token })
      );
      return dispatch({
        type: LOGIN,
        payload: { status: data.status, ...data.message },
      });
    })
    .catch(({ response }) => {
      return dispatch({
        type: GET_LOGIN_ERR,
        payload: response?.data,
      });
    });
};
export const getUserProfile = () => (dispatch) => {
  let loggedInUser = JSON.parse(localStorage.getItem('user'));
  if (loggedInUser) {
    axios
      .get('http://localhost:4000/api/user/profile', {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem('user')).token
          }`,
        },
      })
      .then(({ data }) => {
        return dispatch({
          type: GET_USER_PROFILE,
          payload: data?.data,
        });
      })
      .catch(({ response }) => {
        return dispatch({
          type: GET_USER_PROFILE_ERR,
          payload: response?.data,
        });
      });
  } else {
    return undefined; //change to be as the same to line 76
  }
};
export const logout = () => (dispatch) => {
  let loggedInUser = JSON.parse(localStorage.getItem('user'));
  if (loggedInUser) {
    localStorage.clear('user');
    return dispatch({
      type: LOGOUT,
      payload: null,
    });
  }
};

// export const setCurrentUser = (decoded) => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: currentUserSubject.asObservable(),
//   };
// };

// export const logoutUser = () => (dispatch) => {
//   //remove token from the localstorage
//   localStorage.removeItem('user');
//   currentUserSubject.next(null);

//   //remove auth header
//   setAuthToken(false);

//   //set current user to empty object
//   dispatch({});
// };

// export function currentUserValue() {
//   dispatch({
//     type: GET_CURRENT_USER,
//     payload: currentUserSubject.value,
//   });
// }
