import React, {Component} from "react";
import { NavLink, Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import { logoutUser } from "../redux/user/userActions";


const initialState = {
  isAuthentificated : false,
  redirect : true
}

class Menu extends Component {

   
  componentDidMount() {
    // 1. if user is authentificated => then  set isAuthentificated state to TRUE
    const users = JSON.parse(localStorage.getItem('users') || '[]') ;
    const loggedInTest = users.some(user=> user.isLoggedIn === true); 
    // 2. set isAuthentificated state 
    if(loggedInTest)
    {
      this.setState({...this.state, isAuthentificated : true});
    }
  }
  
  handleLougout = (e) => {
    this.props.logoutUser();
    console.log(this.props)
    // this.props.history.push("/login");
  };
  render(){
    console.log(this.props)
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              Cars Application
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/addCar">
                    Ajout Voiture
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/listCars">
                    List Voiture
                  </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link btn btn-success btn-sm mx-1" to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link btn btn-success btn-sm x-1" to="/register">Register</NavLink>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-success btn-sm mx-1" onClick={this.handleLougout}>Logout</button>
              </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
}


const mapStateToProps = (state) => {
  return {
    isAuthentificated: state.user.isAuthentificated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps) (Menu);
