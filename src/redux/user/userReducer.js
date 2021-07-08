import { ADD_USER } from "./userTypes";



const initialState = {
    listUsers: JSON.parse(localStorage.getItem("users") || "[]"),
     user: {
      username: "",
      email: "",
      password: "",
     isLoggedIn: false
     }
  };

  const userReducer = (state = initialState, action) => {
      switch(action.type){
         case ADD_USER:
             console.log(action.payload)
             const newUser = {
              username: action.payload.username,
              email: action.payload.email,
              password: action.payload.password,
              isLoggedIn: false
             }
             state.listUsers.push(newUser);
             localStorage.setItem('users', JSON.stringify(state.listUsers));
        return state
        

        default: return state
      }
};

export default userReducer