import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addCar, editCar } from "../redux/car/carActions";

const initialtState = {
    car: {
      marque: "",
      model: "",
      color: "",
      horsePower: "",
    },
  };
 
  const cars = JSON.parse(localStorage.getItem('cars') || '[]')

export class EditCar extends Component {

    state =  initialtState

    componentDidMount() {

        const id = this.props.match.params.idCar;
        const car = cars[id];

        if(car !== undefined){
            this.setState({
                car: car
            }); 
        }
        }
    
        handleMarqueChange = (e) => {
            const newData = Object.assign(this.state.car, {
                marque: e.target.value
              });
              this.setState({newData});
        }

        handleModelChange = (e) => {
            const newData = Object.assign(this.state.car, {
                model: e.target.value
              });
              this.setState({newData});
        }

        handleColorChange = (e) => {
            const newData = Object.assign(this.state.car, {
                color: e.target.value
              });
              this.setState({newData});
        }

        handleHorsePowerChange = (e) => {
            const newData = Object.assign(this.state.car, {
                horsePower: e.target.value
              });
              this.setState({newData});
        }

        
        handleSubmit = (e) => {
         e.preventDefault();
         const id = this.props.match.params.idCar;
        //  cars.splice(id, 1, this.state.car)
        //  localStorage.setItem('cars', JSON.stringify(cars))
        this.props.editCar(id, this.state.car)
         this.props.history.push('/listCars')
         
        }
    
    render() {
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
                  value={this.state.car.marque}
                  onChange={this.handleMarqueChange}
                />
              </div>
              <div className="form-group">
                <label className="text-start w-100">Model: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer le model ici"
                  value={this.state.car.model}
                  onChange={this.handleModelChange}
                />
              </div>
              <div className="form-group">
                <label className="text-start w-100">Couleur: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer la couleur ici"
                  value={this.state.car.color}
                  onChange={this.handleColorChange}
                />
              </div>
              <div className="form-group">
                <label className="text-start w-100">Chevaux: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Entrer les chevaux ici"
                  value={this.state.car.horsePower}
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
        )
    }
}

const mapStateToProps = (state) => {
    return {
      carss: state,
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      addCar: (car) => dispatch(addCar(car)),
      editCar: (index, car) => dispatch(editCar(index, car))
    };
  };

export default connect(mapStateToProps, mapDispatchToProps) (EditCar)
