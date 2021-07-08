import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Menu from "./components/Menu";
import AddCar from "./components/AddCar";
import ListCars from "./components/ListCars";
import EditCar from "./components/EditCar";
import { Provider } from "react-redux";
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <Route exact path="/">
          <Redirect to="/listCars" />
        </Route>
        <Route path="/listCars" component={ListCars} />
        <Route path="/editCar/:idCar" component={EditCar}/>
        <Route path="/addCar" component={AddCar} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
