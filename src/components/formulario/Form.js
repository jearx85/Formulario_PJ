import React from 'react'
import './Form.css'

export default function login() {
  return (
    <div>
      <div className="container">
          <form>
            <div className="mb-3">
            <form>
              <div class="row">
                <div class="col">
                <label for="exampleInputPassword1" className="form-label">Número SPOA</label>
                  <input type="text" class="form-control" placeholder="Número SPOA"/>
                </div>
                <div class="col">
                <label for="exampleInputPassword1" className="form-label">Fecha y hora de los hechos</label>
                <input type="datetime-local" class="form-control" placeholder="Fecha y hora" required="True"/>
                
                <label for="oficioNUmber" className="form-label">Oficio</label>
                <input type="number" class="form-control" placeholder="numero de oficio"/>
                
                  <div class="col">  
                  <br />
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label" for="exampleCheck1" id="remitidoCheck">Remitido</label>

                  </div>
                </div>
              </div>
              <hr />
                <div class="row">
                  <div class="col">
                  <label for="exampleInputPassword1" className="form-label">Clase accidente</label>
                  <div class="dropdown">
                  <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Seleccione
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" id="choque">Choque</a>
                    <a class="dropdown-item" id="Atropello">Atropello</a>
                    <a class="dropdown-item" id="Volcamiento">Volcamiento</a>
                    <a class="dropdown-item" id="Caída ocupante">Caída ocupante</a>
                    <a class="dropdown-item" id="Incendio">Incendio</a>
                    <a class="dropdown-item" id="Otro">Otro</a>
                    <a class="dropdown-item" id="Sin información">Sin información</a>
                  </div>
                </div>
                  </div>
                  <div class="col">
                  <label for="exampleInputPassword1" className="form-label">Otro</label>
                  <input type="text" class="form-control"/>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col">
                  <label for="exampleInputPassword1" className="form-label">Choque con</label>
                  <div class="dropdown">
                  <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Seleccione
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" >Vehiculo</a>
                    <a class="dropdown-item" >Tren</a>
                    <a class="dropdown-item" >Semoviente</a>
                    <a class="dropdown-item" >Objeto fijo</a>
                  </div>
                </div>
                  </div>
                  <div class="col">
                  <label for="exampleInputPassword1" className="form-label">Objeto fijo</label>
                  <input type="text" class="form-control"/>
                  </div>
                </div>
            </form>
            </div>
            <hr />
            <button type="submit" className="btn btn-primary">Submit</button>
       </form>
      </div>  
    </div>
  )
}
