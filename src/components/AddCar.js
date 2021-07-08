import React, { Component } from "react";
import { addCar } from "../redux/car/carActions";
import { connect } from "react-redux";
import { render } from "@testing-library/react";


class AddCar extends Component  {

  state = {
    marque: "",
    model: "",
    color: "",
    horsePower: "",
  }

  handleMarqueChange = (e) => {
    this.setState({
      marque: e.target.value
    })
  }

  handleModelChange = (e) => {
    this.setState({
      model: e.target.value
    })
  }

  handleColorChange = (e) => {
    this.setState({
      color: e.target.value
    })
  }

  handleHorsePowerChange = (e) => {
    this.setState({
      horsePower: e.target.value
    })
  }


   handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.addCar(this.state)
    this.props.history.push("/listCars")
  };
 

  render(){
    return (
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="offset-3 col-6 border">
            <h1 className="my-5 text-center text-white bg-dark">Add Car</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="text-start w-100">Marque: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer la marque ici"
                  onChange={this.handleMarqueChange}
                />
              </div>
              <div className="form-group">
                <label className="text-start w-100">Model: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer le model ici"
                  onChange={this.handleModelChange}
                />
              </div>
              <div className="form-group">
                <label className="text-start w-100">Couleur: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer la couleur ici"
                  onChange={this.handleColorChange}
                />
              </div>
              <div className="form-group">
                <label className="text-start w-100">Chevaux: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer les chevaux ici"
                  onChange={this.handleHorsePowerChange}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button className="btn btn-success" type="submit">
                  <i className="fa fa-save"></i> Valider
                </button>
                <button className="btn btn-secondary text-white mb-1">
                  <i className="fa fa-undo"></i> Cancel
                </button>
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
    marque: state.marque,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
