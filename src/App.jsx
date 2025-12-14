import React from 'react'       // <-- ADD THIS
import './index.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import ABout from './page/ABout'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from './page/Contact'
import GraphicDesign from './service/GraphicDesign'
import VideoEditing from './service/VideoEditing'
import BoostPage from './service/BoostPage'
import Upgrade from './service/Upgrade'
import TelegramIcon from './components/TelegramIcon'
import ScrollToTop from './components/ScrollToTop'
import OurClientPage from './page/OurClientPage'

function App() {
   useEffect(() => {
    AOS.init();
  }, []);
  return (
      <BrowserRouter>
      <ScrollToTop />
      <TelegramIcon />
        <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<ABout />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/service/design' element = {<GraphicDesign />} />
         <Route path='/service/video-editing' element = {<VideoEditing />} />
         <Route path='/service/boost-post' element = {<BoostPage />} />
         <Route path='/service/upgrade-page' element = {<Upgrade />} />
         <Route path='/our-client' element = {<OurClientPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

