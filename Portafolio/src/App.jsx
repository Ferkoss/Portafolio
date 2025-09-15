import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Separador from './components/separador/Separador'
import Footer from './components/footer/Footer'
import CambiarModo from './components/cambiarModo/cambiarModo'
import {  ModeContextProvider} from './context/ModeContext'
import Layout from './components/layout/Layout'

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
