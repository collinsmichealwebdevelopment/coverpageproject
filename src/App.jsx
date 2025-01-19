import React from 'react'
import './App.scss';
import Navbar from './components/navbar/Navbar';
import Card from './containers/cards/card';


const App = () => {
  return (
    <div >
      <Navbar/>
      <Card />
    </div>
  )
}

export default App
