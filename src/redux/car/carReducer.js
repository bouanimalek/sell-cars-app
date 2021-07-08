import { ADD_CAR } from "./carTypes";

const initialState = {
  listCars: JSON.parse(localStorage.getItem("cars") || "[]"),
   car: {
    marque: "",
    model: "",
    color: "",
    horsePower: ""
   }
  
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      
    const  newCar =  {
         marque: action.payload.marque,
         model: action.payload.model,
         color: action.payload.color,
         horsePower: action.payload.horsePower
      };

      state.listCars.push(newCar);
      localStorage.setItem('cars', JSON.stringify(state.listCars));

      return state
      
    default: return state
  }
};
export default carReducer
