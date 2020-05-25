import {dashboard, authorization} from '../config';

const AUTH_URL = 'https://reqres.in/';
const MOVIE_URL = 'https://api.spotify.com/v1/';

export const loginUser = (requestPayload) => {
  return async (dispatch, getState) => {
    dispatch({type: 'LOGIN_USER_REQUEST', payload: requestPayload});
    try {
      const response = await fetch(`${AUTH_URL}api/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      }).then((res) => res.json());
      if (response.error) {
        dispatch({type: 'LOGIN_USER_FAIL', payload: response.error});
        alert(response.error);
      } else {
        dispatch({type: 'LOGIN_USER_SUCCESS', payload: response});
        dispatch(dashboard());
      }
    } catch (error) {
      dispatch({type: 'LOGIN_USER_FAIL', payload: error});
    }
  };
};

export const signupUser = (requestPayload) => {
  return async (dispatch, getState) => {
    dispatch({type: 'SIGNUP_USER_REQUEST', payload: requestPayload});
    try {
      const response = await fetch(`${AUTH_URL}api/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      }).then((res) => res.json());
      if (response.error) {
        dispatch({type: 'SIGNUP_USER_FAIL', payload: response.error});
        alert(response.error);
      } else {
        dispatch({type: 'SIGNUP_USER_SUCCESS', payload: response});
      }
    } catch (error) {
      dispatch({type: 'SIGNUP_USER_FAIL', payload: error});
    }
  };
};

export const getDashboardData = () => {
  return async (dispatch, getState) => {
    dispatch({type: 'ALBUM_REQUEST'});
    try {
      const response = await fetch(
        `${MOVIE_URL}albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc&market=ES`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization:
              'Bearer BQA7g0HYoKNGh24hVs553PZEHpizQMS6NO12LiZQ15CTycUrwo9p5xow604j6JXPn-jh8BXDUB_2PpAAckBtJdGpBpg1G4lRqJ0Xfp182TfZcljyuYN2el8UQZz6KoGGZOdhSP5syH8DVW7FZgzKFoHYmZzgrxw',
            'Content-Type': 'application/json',
          },
        },
      ).then((res) => res.json());
      if (response.error) {
        dispatch({type: 'ALBUM_FAIL', payload: response});
      } else {
        dispatch({type: 'ALBUM_SUCCESS', payload: response});
      }
    } catch (error) {
      dispatch({type: 'ALBUM_FAIL', payload: error});
    }
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    dispatch({type: 'LOGOUT'});
    dispatch(authorization());
  };
};

export const addNewNote = (requestPayload) => {
  return async (dispatch, getState) => {
    dispatch({type: 'ADD_NOTE_REQUEST', payload: requestPayload});
    try {
      const response = await fetch(`${AUTH_URL}api/users`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(requestPayload),
      }).then((res) => res.json());
      if (response.error) {
        dispatch({type: 'ADD_NOTE_FAIL', payload: response.error});
        alert(response.error);
      } else {
        dispatch({type: 'ADD_NOTE_SUCCESS', payload: response});
      }
    } catch (error) {
      dispatch({type: 'ADD_NOTE_FAIL', payload: error});
    }
  };
};
