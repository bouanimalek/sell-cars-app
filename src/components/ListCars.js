import React, { Component, Fragment } from "react";
import { addCar } from "../redux/car/carActions";
import { connect } from "react-redux";

class ListCars extends Component {

  handleDetail = (index) => {
    this.props.history.push(`/editCar/${index}`)
 }

 handleDelete = (index) => {
  const cars = JSON.parse(localStorage.getItem("cars") || "[]");
  console.log(index)
  cars.splice(index, 1);
  localStorage.setItem("cars", JSON.stringify(cars));
};

  render() {
    
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="offset-2 col-sm-8">
            <table className="table table-striped table-hover text-center">
              <thead>
                <tr>
                  <th>Marque</th>
                  <th>Model</th>
                  <th>Couleur</th>
                  <th>Chevaux</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                
                  {
                    this.props.listCars.map((car, index) => {
                      return(
                        <Fragment key={index}>
                          <tr>
                        <td>{car.marque}</td>
                        <td>{car.model}</td>
                        <td>{car.color}</td>
                        <td>{car.horsePower}</td>
                        <td>
                    <button className="btn btn-info text-white "><i className="fa fa-edit" onClick={this.handleDetail.bind(this, index)}></i> Edit</button>
                    <button className="btn btn-danger"><i className="fa fa-trash" onClick={this.handleDelete.bind(this, index)}></i> Delete</button>
                  </td>
                        </tr>
                        </Fragment>
                      )
                    })
                  }
                  {/* <td>{this.props.marque}</td>
                  <td>{this.props.model}</td>
                  <td>{this.props.color}</td>
                  <td>{this.props.horsePower}</td>
                  <td>
                    <button className="btn btn-info text-white "><i className="fa fa-edit"></i> Edit</button>
                    <button className="btn btn-danger"><i className="fa fa-trash"></i> Delete</button>
                  </td> */}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  
  return {
    listCars: state.listCars
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: (car) => dispatch(addCar(car)),
  };
};

export default connect(mapStateToProps)(ListCars);
