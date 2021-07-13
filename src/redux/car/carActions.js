import { ADD_CAR, DELETE_CAR, EDIT_CAR } from "./carTypes"


export const addCar = (car) => {
     return {
         type: ADD_CAR,
         payload: car
        
     }
}

export const deleteCar = (index) => {
    return {
        type: DELETE_CAR,
        payload: index
    }
}

export const editCar = (index, car) => {
    return {
        type: EDIT_CAR,
        payload: {index: index, car: car} 
    }
}