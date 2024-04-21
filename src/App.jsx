import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import NotFound from './pages/NotFound';
import New from './pages/New';

import './App.css'




function App() {

  useEffect(() => {
    const timerId = setTimeout(() => {
      const script = document.createElement('script');
      script.src = '../src/assets/js/main.js';
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }, 5000); // Время задержки в миллисекундах (например, 3000 мс = 3 секунды)

    // Очистка таймера при размонтировании компонента
    return () => {
      clearTimeout(timerId);
    };
  }, []);


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
