import { ADD_CAR } from "./carTypes";

const initialState = {
  
    marque: "",
    model: "",
    color: "",
    horsePower: "",
  
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
         marque: action.payload.marque,
         model: action.payload.model,
         color: action.payload.color,
         horsePower: action.payload.horsePower
      };
    default: return state
  }
};
export default carReducer
