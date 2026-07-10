import './App.css'
 import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Separador from './components/separador/Separador'
import Footer from './components/footer/Footer'
import CambiarModo from './components/cambiarModo/cambiarModo'
import {  ModeContextProvider} from './context/ModeContext'
import Layout from './components/layout/Layout'
import { BrowserRouter } from 'react-router-dom'
import "./prioridad.css"
function App() {


    



  return (

  <ModeContextProvider>
  <Layout>
    <Separador/>
    <CambiarModo/>
    <Header />
    <Separador/>
    <Main />
    <Separador/>
    <Footer/>
    <Separador/>
  </Layout>
  </ModeContextProvider>

  )
}

export default App 
