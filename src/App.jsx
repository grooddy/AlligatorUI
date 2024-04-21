import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import NotFound from './pages/NotFound';
import New from './pages/New';

import './App.css'



function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/news" element={<News/>}/> 
      <Route path="/new/:id" element={<New/>} />
      <Route path="/about" element={<About/>}/> 
      <Route path="*" element={<NotFound />} /> {/* Маршрут для страницы 404 */}
    </Routes>    
    </>
  )
}

export default App
