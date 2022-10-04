import React from 'react'

export default function Vehiculos() {
  return (
    <div>
       <div className="container">
        <h2>Vehiculos</h2>
            <form className="row g-3">
                <div className="col-md-4">
                <label for="exampleInputPassword1" className="form-label">Vehiculo</label>
                <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Clase de vehiculo</label>
                  <div className="dropdown">
                    <select className = "listDoc">
                      <option className="dropdown-item" id="Seleccione">Seleccione</option>
                      <option className="dropdown-item" id="moto">Motocicleta</option>
                      <option className="dropdown-item" id="Bicicleta">Bicicleta</option>
                      <option className="dropdown-item" id="camion">Camión</option>
                      <option className="dropdown-item" id="bus">Bus</option>
                      <option className="dropdown-item" id="maquina">Maquina</option>
                      <option className="dropdown-item" id="Automovil">Automovil</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Placa</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-4">
                <label for="barrio" className="form-label">Servicio</label>
                  <div className="dropdown">
                    <select className = "listDoc">
                      <option className="dropdown-item" id="Seleccione">Seleccione</option>
                      <option className="dropdown-item" id="Oficial">Oficial</option>
                      <option className="dropdown-item" id="Particular">Particular</option>
                      <option className="dropdown-item" id="Publico">Público</option>
                      <option className="dropdown-item" id="diplomatico">Diplomático</option>
                      <option className="dropdown-item" id="desconocido">Desconocido</option>
                    </select>
                  </div>
                  </div>
                <div className="col-sm-4">
                  <label for="barrio" className="form-label">Modelo</label>
                  <input type="text" className="form-control"/>
                  </div>
                
                  <button type="submit" className="btnPerson btn-primary">Registrar otro vehiculo</button>
            </form>
         </div>   
    </div>
  )
}
