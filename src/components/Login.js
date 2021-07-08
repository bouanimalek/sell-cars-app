import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addUser } from '../redux/user/userActions';

export class Login extends Component {

  state = {
          username: "",
          email: "",
          password: "",
          isLoggedIn: false
      };

      handleUsernameChange = (e) => {
        this.setState({
          username: e.target.value
        })
      }
    
      handleEmailChange = (e) => {
        this.setState({
          email: e.target.value
        })
      }
    
      handlePasswordChange = (e) => {
        this.setState({
          password: e.target.value
        })
      }

      handleSubmit = (e) => {
       e.preventDefault();
       console.log(this.state)
       this.props.addUser(this.state)
      }
    render() {
        return (
            <div className="container-fluid mt-3">
        <div className="row">
          <div className="offset-3 col-6 border">
            <h1 className="my-5 text-center text-white bg-dark">Register</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="text-start w-100">Username: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer username ici"
                  onChange={this.handleUsernameChange}
                />
              </div>
              <div className="form-group">
                <label className="text-start w-100">Email: </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Entrer le email ici"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="form-group">
                <label className="text-start w-100">Password: </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Entrer mot de passe ici"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-success" type="submit">
                  <i className="fa fa-save"></i> Enregistrer
                </button>
                <button className="btn btn-secondary text-white mb-1">
                  <i className="fa fa-undo" ></i> Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
    //   email: state.user.email,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      addUser: (user) => dispatch(addUser(user)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Login)
