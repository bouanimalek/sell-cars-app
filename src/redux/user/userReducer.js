import { ADD_USER, LOGIN_USER } from "./userTypes";



const initialState = {
  listUsers: JSON.parse(localStorage.getItem("users") || "[]"),
  user: {
    username: "",
    email: "",
    password: "",
    isLoggedIn: false,
  },
  wrongUsernameOrPassword: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      console.log(action.payload);
      const newUser = {
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password,
        isLoggedIn: false,
      };
      state.listUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.listUsers));
      return state;

    case LOGIN_USER:
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const indexLoggedUser = users.findIndex((user) => {
        return (
          user.username === action.payload.username &&
          user.password === action.payload.password
        );
      });
      if (indexLoggedUser !== -1) {
        // 4. change the isLoggedIn status to true
        console.log(indexLoggedUser)
        users[indexLoggedUser].isLoggedIn = true;
        state.listUsers = users;
        localStorage.setItem("users", JSON.stringify(users));
        // 5. navigate to list todo
       // router.push("/listCars");
       state.wrongUsernameOrPassword = false;
      } else {
        state.wrongUsernameOrPassword = true;
      }
    return state
    default:
      return state;
  }
};

export default userReducer;
