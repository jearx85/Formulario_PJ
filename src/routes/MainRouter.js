import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Nav from '../components/Nav';
import Form from '../components/Form';

export default function MainRouter() {
  return (
    <BrowserRouter>
    <Nav />
    <Form />
     
    </BrowserRouter>
  )
}
