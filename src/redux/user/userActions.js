import { ADD_USER, LOGIN_USER, LOGOUT_USER } from "./userTypes"



export const addUser = (user) => {

    return {
        type: ADD_USER,
        payload: user
    }
}

export const loginUser = (username, password) => {

    return {
        type: LOGIN_USER,
        payload: {username: username, password: password}
    }
}

export const logoutUser = () => {

    return {
        type: LOGOUT_USER
    }
}