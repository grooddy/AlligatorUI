import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'


//import './assets/vendor/animate.css/animate.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
//import './assets/vendor/boxicons/css/boxicons.min.css'
//import './assets/vendor/glightbox/css/glightbox.min.css'
//import './assets/vendor/swiper/swiper-bundle.min.css'
import './assets/css/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
