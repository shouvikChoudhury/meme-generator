import React from 'react'
import './App.css';
import Memes from './Components/Memes';
import {
  Routes,
  Route
} from "react-router-dom";
import Generate from './Components/Generate';

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Memes />} />
        <Route path='/edit' element={<Generate />} />
      </Routes>
    </div>
  )
}

export default App
