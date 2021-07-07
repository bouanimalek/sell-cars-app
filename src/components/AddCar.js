import React from 'react'

function AddCar() {
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="offset-3 col-6 border">
                    <h1 className="my-5 text-center text-white bg-dark">Add Car</h1>
                    <form>
                        <div className="form-group">
                          <label className="text-start w-100">Marque: </label>
                          <input type="text" className="form-control" placeholder="Entrer la marque ici"/>
                        </div>
                        <div className="form-group">
                          <label className="text-start w-100">Model: </label>
                          <input type="text" className="form-control" placeholder="Entrer le model ici"/>
                        </div>
                        <div className="form-group">
                          <label className="text-start w-100">Couleur: </label>
                          <input type="text" className="form-control" placeholder="Entrer la couleur ici"/>
                        </div>
                        <div className="form-group">
                          <label className="text-start w-100">Chevaux: </label>
                          <input type="text" className="form-control" placeholder="Entrer les chevaux ici"/>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                              <button className="btn btn-success"><i className="fa fa-save"></i> Valider</button>
                              <button className="btn btn-secondary text-white mb-1"><i className="fa fa-undo"></i> Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default AddCar
