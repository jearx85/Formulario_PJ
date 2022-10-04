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
                <label for="exampleInputPassword1" className="form-label">Número SPOA</label>
                  <input type="text" className="form-control" placeholder="Número SPOA"/>
                </div>
                <div className="col">
                <label for="exampleInputPassword1" className="form-label">Fecha y hora de los hechos</label>
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
                  <label for="exampleInputPassword1" className="form-label">Clase accidente</label>
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
                  <div className="col">
                  <label for="exampleInputPassword1" className="form-label">Otro</label>
                  <input type="text" className="form-control"/>
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
             <hr />
            <button type="submit" className="btn btn-primary">Enviar</button>
            
       </form>
      </div>  
    </div>
  )
}
