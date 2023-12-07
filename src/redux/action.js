import {
  ERROR,
  LOADING,
  LOGINERROR,
  LOGINLOADING,
  LOGINSUCCESS,
  SIGNUPERROR,
  SIGNUPLOADING,
  SIGNUPSUCCESS,
  SUCCESS,
} from "./actionTyes";
import axios from "axios";
const url = "https://drab-pink-rhinoceros-cuff.cyclic.app/";

export const SignUpReq = (obj) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUPLOADING });

    return axios.post(`${url}/api/register`, obj).then((data) => {
      console.log(data);
      dispatch({ type: SIGNUPSUCCESS });
      return data;
    });
  } catch (error) {
    dispatch({ type: SIGNUPERROR });
    return error;
  }
};
export const LoginReq = (obj) => async (dispatch) => {
  try {
    dispatch({ type: LOGINLOADING });

    return axios.post(`${url}/api/login`, obj).then((data) => {
      console.log(data);
      dispatch({ type: LOGINSUCCESS });
      return data;
    });
  } catch (error) {
    dispatch({ type: LOGINERROR });
    return error;
  }
};
export const GETBLOGReq = (obj) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    return axios.get(`${url}/api/blogs`).then((data) => {
      // console.log(data.data.blogs);
      dispatch({ type: SUCCESS, payload: data.data.blogs });
      return data;
    });
  } catch (error) {
    dispatch({ type: ERROR });
    return error;
  }
};
export const DeleteReq = (obj) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    return axios.delete(`${url}/api/blogs${obj}`).then((data) => {
      // console.log(data.data.blogs);
      dispatch({ type: SUCCESS, payload: data.data.blogs });
      GETBLOGReq()
      return data;
    });
  } catch (error) {
    dispatch({ type: ERROR });
    return error;
  }
};
