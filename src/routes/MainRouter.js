import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Form from '../components/formulario/Form';
import Personas from '../components/personas/Personas';
import Vehiculos from '../components/vehiculos/Vehiculos';

export default function MainRouter() {
  return (
    <BrowserRouter>
    <div className="container">
    <Form />
    <Personas />
    <Vehiculos />
    <hr />
            <button type="submit" className="btn btn-primary">Enviar</button>
    </div>
    </BrowserRouter>
  )
}
