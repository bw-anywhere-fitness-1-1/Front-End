import { axiosWithAuth } from '../../utils/axiosWithAuth'
import jwt_decode from "jwt-decode";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const GET_CLASSES_START = 'GET_CLASSES_START'
export const GET_CLASSES_SUCCESS = 'GET_CLASSES_SUCCESS'
export const GET_CLASSES_FAILURE = 'GET_CLASSES_FAILURE'

export const ADD_CLASS_START = 'ADD_CLASS_START'
export const ADD_CLASS_SUCCESS = 'ADD_CLASS_SUCCESS'
export const ADD_CLASS_FAILURE = 'ADD_CLASS_FAILURE'

export const REMOVE_CLASS_START = 'REMOVE_CLASS_START'
export const REMOVE_CLASS_SUCCESS = 'REMOVE_CLASS_SUCCESS'
export const REMOVE_CLASS_FAILURE = 'REMOVE_CLASS_FAILURE'


export const login = (user) => (dispatch) => {
    dispatch({ type: LOGIN_START });
    return axiosWithAuth()
        .post("/auth/login", user)
        .then((res) => {
            localStorage.setItem("token", res.data.token);
            const { role } = jwt_decode(res.data.token);
            axiosWithAuth()
                .get(`/${role}/classes/all`)
                .then((res) => {
                    dispatch({ type: LOGIN_SUCCESS, payload: res.data.data });
                    
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) =>
            dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message })
        );
};