import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class ListCars extends Component {
  render() {
    console.log(this.props.marque);
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
                    <button className="btn btn-info text-white "><i className="fa fa-edit"></i> Edit</button>
                    <button className="btn btn-danger"><i className="fa fa-trash"></i> Delete</button>
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

export default connect(mapStateToProps)(ListCars);
