import React from 'react'

export default function Personas() {
  return (
    <div>
      <div className="container">
      <h2>Información del involucrado</h2>
            <form className="row g-3">
                <div className="col-md-8">
                <label for="exampleInputPassword1" className="form-label">Tipo de persona</label>
                  <div className="dropdown">
                  <select className = "listInvol">
                    <option className="dropdown-item" id="Seleccione">Seleccione</option>
                    <option className="dropdown-item" id="OCCISO">OCCISO</option>
                    <option className="dropdown-item" id="INDICIADO">INDICIADO</option>
                    <option className="dropdown-item" id="VICTIMA">VICTIMA</option>
                    <option className="dropdown-item" id="TESTIGO">TESTIGO</option>
                  </select>
                </div>
                  </div>
                <div className="col-md-6">
                  <label for="barrio" className="form-label">Tipo de documento</label>
                  <div className="dropdown">
                    <select className = "listDoc">
                      <option className="dropdown-item" id="Seleccione">Seleccione</option>
                      <option className="dropdown-item" id="cedula">Cedula de ciudadanía</option>
                      <option className="dropdown-item" id="Pasaporte">Pasaporte</option>
                      <option className="dropdown-item" id="nuip">NUIP</option>
                      <option className="dropdown-item" id="ti">Tarjeta de identidad</option>
                      <option className="dropdown-item" id="pep">Permiso especial de permanencia</option>
                      <option className="dropdown-item" id="nn">Indocumentado</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <label for="barrio" className="form-label">Numero de documento</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-6">
                  <label for="barrio" className="form-label">Nombres</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-6">
                  <label for="barrio" className="form-label">Apellidos</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Fecha de nacimiento</label>
                  <input type="date" className="form-control"/>
                  </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Edad</label>
                  <input type="number" className="form-control"/>
                  </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Sexo</label>
                  <div className="dropdown">
                    <select className = "listDoc">
                      <option className="dropdown-item" id="Seleccione">Seleccione</option>
                      <option className="dropdown-item" id="masculino">M</option>
                      <option className="dropdown-item" id="femenino">F</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Nacionalidad</label>
                  <input type="text" className="form-control" id = "nacionalidad"/>
                </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Condición</label>
                  <div className="dropdown">
                    <select className = "listcond">
                      <option className="dropdown-item" id="Seleccione">Seleccione</option>
                      <option className="dropdown-item" id="Acompanante">Acompañante</option>
                      <option className="dropdown-item" id="Conductor">Conductor</option>
                      <option className="dropdown-item" id="Pasajero">Pasajero</option>
                      <option className="dropdown-item" id="Peatón">Peatón</option>
                      <option className="dropdown-item" id="noInfo">Sin información</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">  
                  <br />
                  <input type="checkbox" className="form-check-input" id="Check2"/>
                  <label className="form-check-label" for="Check1" id="remitidoCheck">Movilidad reducida</label>
                  <br />
                  <input type="checkbox" className="form-check-input" id="Check3"/>
                  <label className="form-check-label" for="Check3" id="habcall">Habitante de calle</label>
                </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Nombre de contacto/Familiar</label>
                  <input type="text" className="form-control"/>
                  </div>
                <div className="col-md-4">
                <label for="barrio" className="form-label">Parentesco</label>
                  <div className="dropdown">
                    <select className = "listcond">
                      <option className="dropdown-item" id="Seleccione">Seleccione</option>
                      <option className="dropdown-item" id="Acompanante">Madre</option>
                      <option className="dropdown-item" id="Padre">Padre</option>
                      <option className="dropdown-item" id="hermano">Hermano(a)</option>
                      <option className="dropdown-item" id="hijo">Hijo(a)</option>
                      <option className="dropdown-item" id="abuelo">Abuelo(a)</option>
                      <option className="dropdown-item" id="tio">Tio(a)</option>
                      <option className="dropdown-item" id="primo">Primo(a)</option>
                      <option className="dropdown-item" id="sobrino">Sobrino(a)</option>
                      <option className="dropdown-item" id="amigo">Amigo(a)</option>
                      <option className="dropdown-item" id="companero(a)">Compañero(a)</option>
                      <option className="dropdown-item" id="esposo(a)">Esposo(a)</option>
                      <option className="dropdown-item" id="padrasto">Padrasto</option>
                      <option className="dropdown-item" id="Madrastra">Madrastra</option>
                      <option className="dropdown-item" id="hijastro">Hijastro(a)</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <label for="barrio" className="form-label">Telefono</label>
                  <input type="phone" className="form-control"/>
                </div>
                <div className="col-sm-4">
                  <label for="barrio" className="form-label">Correo</label>
                  <input type="mail" className="form-control"/>
                </div>
                  <button type="submit" className="btnPerson btn-primary">Registrar otra persona</button>
            </form>
             <hr />
      </div>
    </div>
  )
}
