import "./App.css";
import { BrowserRouter,Route } from "react-router-dom";
import Menu from "./components/Menu";
import AddCar from "./components/AddCar";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path="/" component={AddCar} /> 
      <Route path="/addCar" component={AddCar}/>
    </BrowserRouter>
  );
}

export default App;
