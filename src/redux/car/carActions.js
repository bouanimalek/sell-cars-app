import { ADD_CAR } from "./carTypes"


export const addCar = (marque) => {
     return {
         type: ADD_CAR,
         payload: marque
        
     }
}