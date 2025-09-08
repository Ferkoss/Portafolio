import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Separador from './components/separador/Separador'
import Footer from './components/footer/Footer'


function App() {


  return (<>
    <Separador/>
    <Header />
    <Separador/>
    <Main />
    <Separador/>
    <Footer/>
    <Separador/>
  </>
  )
}

export default App
