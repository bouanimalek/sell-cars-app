import { ADD_CAR } from "./carTypes"


export const addCar = (car) => {
     return {
         type: ADD_CAR,
         payload: car
        
     }
}