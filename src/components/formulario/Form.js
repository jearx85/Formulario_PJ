import React from 'react'
import './Form.css'

export default function formulario() {

  return (
    <div>
      <h1 className='titulo_form'>FORMULARIO</h1>
      <div className="container">
          <form>
            <div className="mb-3">
            <form>
              <div className="row">
                <div className="col">
                <label htmlFor="exampleInputPassword1" className="form-label">Número SPOA</label>
                  <input type="text" className="form-control" placeholder="Número SPOA"/>
                </div>
                <div className="col">
                <label htmlFor="exampleInputPassword1" className="form-label">Fecha y hora de los hechos</label>
                <input type="datetime-local" className="form-control" placeholder="Fecha y hora" required="True"/>
                
                <label for="oficioNUmber" className="form-label">Oficio</label>
                <input type="number" className="form-control" placeholder="numero de oficio"/>
                
                  <div className="col">  
                  <br />
                  <input type="checkbox" className="form-check-input" id="Check1"/>
                  <label className="form-check-label" for="exampleCheck1" id="remitidoCheck">Remitido</label>
                  </div>
                </div>
              </div>
              <hr />
                <div className="row">
                  <div className="col">
                  <label for="exampleInputPassword1" className="form-label" id ="claseAccid">Clase accidente</label>
                  <div className="dropdown">
                  <select className = "listd">
                    <option className="dropdown-item" id="Seleccione">Seleccione</option>
                    <option className="dropdown-item" id="choque">Choque</option>
                    <option className="dropdown-item" id="Atropello">Atropello</option>
                    <option className="dropdown-item" id="Volcamiento">Volcamiento</option>
                    <option className="dropdown-item" id="Caída ocupante">Caída ocupante</option>
                    <option className="dropdown-item" id="Incendio">Incendio</option>
                    <option className="dropdown-item" id="Otro">Otro</option>
                    <option className="dropdown-item" id="Sin información">Sin información</option>
                  </select>
                </div>
                  </div>
                  <div className="col" id = "otroa">
                  <label for="exampleInputPassword1" className="form-label">Otro</label>
                  <input type="text" className="form-control" id ="otroAcc" />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col">
                  <label for="exampleInputPassword1" className="form-label">Choque con</label>
                  <div className="dropdown">
                  <select className = "listd">
                    <option className="dropdown-item" id="Seleccione">Seleccione</option>
                    <option className="dropdown-item" id="Vehiculo">Vehiculo</option>
                    <option className="dropdown-item" id="Tren">Tren</option>
                    <option className="dropdown-item" id="Semoviente">Semoviente</option>
                    <option className="dropdown-item" id="Objeto fijo">Objeto fijo</option>
                  </select>
                </div>
                  </div>
                  <div className="col">
                  <label for="exampleInputPassword1" className="form-label">Objeto fijo</label>
                  <input type="text" className="form-control"/>
                  </div>
                </div>
            </form>
            </div>
            <hr />

            <div className = "container1">
              <h2>Dirección de los hechos</h2>
              <form className="row g-3">
                <div className="col-md-4">
                  <label for="direccion" className="form-label">Dirección</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Barrio</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-4">
                  <label for="comuna" className="form-label">Comuna</label>
                  <input type="text" className="form-control"/>
                  </div>
                  </form>
            </div>
            <hr />

            <h2>Inspección técnica del cadaver</h2>
            <form className="row g-3">
                <div className="col-md-6">
                <label for="exampleInputPassword1" className="form-label">Lugar de inspección</label>
                  <div className="dropdown">
                  <select className = "listd">
                    <option className="dropdown-item" id="Seleccione">Seleccione</option>
                    <option className="dropdown-item" id="Via_Publica">Vía Publica</option>
                    <option className="dropdown-item" id="centro_as">Centro asistencial</option>
                    <option className="dropdown-item" id="otro">Otro</option>
                  </select>
                </div>
                  </div>
                <div className="col-md-6">
                  <label for="barrio" className="form-label">Fecha y hora del levantamiento</label>
                  <input type="date" className="form-control"/>
                  </div>
            </form>
            <hr />

            <h2>Recolección de información</h2>
            <form className="row g-3">
                <div className="col-md-2">
                <label for="exampleInputPassword1" className="form-label">Grupo</label>
                  <div className="dropdown">
                  <select className = "listGrupos">
                    <option className="dropdown-item" id="Seleccione">Seleccione</option>
                    <option className="dropdown-item" id="1A">1A</option>
                    <option className="dropdown-item" id="2A">2A</option>
                    <option className="dropdown-item" id="1B">1B</option>
                    <option className="dropdown-item" id="2B">2B</option>
                    <option className="dropdown-item" id="1C">1C</option>
                    <option className="dropdown-item" id="2C">2C</option>
                    <option className="dropdown-item" id="4B">4B</option>
                    <option className="dropdown-item" id="4A">4A</option>
                    <option className="dropdown-item" id="2A">2A</option>
                  </select>
                </div>
                  </div>
                <div className="col-md-3">
                  <label for="barrio" className="form-label">Coordinador</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-3">
                  <label for="barrio" className="form-label">Integrantes</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-3">
                  <label for="barrio" className="form-label">Agente que conece el caso</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Investigador asignado</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Fotos</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Videos</label>
                  <input type="text" className="form-control"/>
                  </div>
            </form>
            <hr />

            <h2>Relato de los hechos</h2>
            <form className="row g-3">
              <div className="col-md-6"> 
                  <label for="relato" className="form-label">Relato</label>
                  <textarea class="form-control" id="textArea" rows="8"></textarea>
              </div>
              <div className="col-md-6">
                  <label for="relato" className="form-label">Hipotesis</label>
                  <input type="text" className="form-control"/>
              </div>
              <div className="col-md-6">
                  <label for="otroHipotesis" className="form-label">Otro</label>
                  <input type="text" className="form-control"/>
              </div>
              <div className="col-md-6">
                  <label for="relato" className="form-label">Observaciones de la hipotesis</label>
                  <input type="text" className="form-control"/>
              </div>
            </form>
             <hr />    
       </form>
      </div>  
    </div>
  )
}
