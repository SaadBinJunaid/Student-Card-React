import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/card'

import photo1 from './assets/img/photo1.png'
import photo2 from './assets/img/photo2.png'
import photo3 from './assets/img/photo3.png'
function App() {
  return (
    <>
   <div className="cards-container">
      <Card name="ali" classname="9th" imageUrl={photo1} grade="A" />
      <Card name="ahmed" classname="8th" imageUrl={photo2} grade="B" />
      <Card name="hassan" classname="7th" imageUrl={photo3} grade="C" />
    </div>
         </>
  )
}

export default App
