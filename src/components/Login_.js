import React, { Component } from "react";
import {connect} from 'react-redux'
import { loginUser } from "../redux/user/userActions";

const initialState = {
  username: "",
  password: "",
  usernameError: "",
  passwordError: "",
};

export class Login_ extends Component {
  state = initialState;

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  validate = () => {
    let usernameError = "";
    let passwordError = "";
    if (!this.state.username) {
      usernameError = "This field is required.";
      document.getElementById("username").classList.remove("is-valid");
      document.getElementById("username").classList.add("is-invalid");
    } else {
      document.getElementById("username").classList.remove("is-invalid");
      document.getElementById("username").classList.add("is-valid");
    }
    if (usernameError) {
      this.setState({ usernameError });
      return false;
    }

    if (!this.state.password) {
      passwordError = "This field is required.";
      document.getElementById("password").classList.remove("is-valid");
      document.getElementById("password").classList.add("is-invalid");
    } else {
      document.getElementById("password").classList.remove("is-invalid");
      document.getElementById("password").classList.add("is-valid");
    }

    if (passwordError) {
      this.setState({ passwordError });
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      
      this.props.loginUser(this.state.username, this.state.password);

      if(!this.props.wrongUsernameOrPassword){
        this.props.history.push("/listCars")
      }
      

      /*
      const userNam = this.state.username;
      const userPass = this.state.password;
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      let foundUsername_ = users.find(function (post, index) {
        if (post.username == userNam) return true;
      });
      let foundPassword_ = users.find(function (post, index) {
        if (post.password == userPass) return true;
      });
      this.setState({
        foundUsername: foundUsername_,
        foundPassword: foundPassword_,
      });
      if (foundUsername_ !== undefined && foundPassword_ !== undefined) {
        this.props.history.push("/listTodo");
        function getIndex(value, arr, prop) {
          for (var i = 0; i < arr.length; i++) {
            if (arr[i][prop] === value) {
              return i;
            }
          }
          return -1; //to handle the case where the value doesn't exist
        }
        var index = getIndex(foundUsername_.username, users, "username");
        // console.log(index)
        if (index !== -1) {
          const newUser = (users[index].isLoggedIn = true);
          //console.log(users[index])
          localStorage.setItem("users", JSON.stringify(users));
        }
      } else {
      }*/
    }
  };
  render() {
    return (
      <div className="container-fluid mt-3">
        {this.props.wrongUsernameOrPassword ? (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Oups</strong> Wrong Username or Password !!!
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : null}

        <div className="row">
          <div className="offset-3 col-6 border">
            <h1 className="my-5 text-center text-white bg-dark">Login</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="text-start w-100">Username: </label>
                <input
                  id="username"
                  type="text"
                  className="form-control"
                  placeholder="Entrer username ici"
                  value={this.state.username}
                  onChange={this.handleUsernameChange}
                />
                <div className="text-start w-100 invalid-feedback d-block">
                  {this.state.usernameError}
                </div>
              </div>

              <div className="form-group">
                <label className="text-start w-100">Password: </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Entrer mot de passe ici"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
                <div className="text-start w-100 invalid-feedback d-block">
                  {this.state.passwordError}
                </div>
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-success" type="submit">
                  <i className="fa fa-save"></i> Se connecter
                </button>
              </div>
              <div className=" text-center mt-3">
                <p>Créer un compte </p>
                <a href="/register">Register</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wrongUsernameOrPassword: state.user.wrongUsernameOrPassword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username, password) => dispatch(loginUser(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Login_);