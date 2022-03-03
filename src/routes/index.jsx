import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from '../Components/Header/header.jsx'
import PilotsPage from '../pages/Pilots.jsx'
import HomePage from '../pages/Home.jsx'
import StarShipsPage from '../pages/StarShip.jsx'
import PilotDetailPage from '../pages/PilotDetail.jsx'
import NotFoundPage from '../pages/NotFound.jsx'
import Footer from '../Components/Footer/footer.jsx'

function MainRoute() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pilots" element={<PilotsPage />} />
        <Route path="/pilot/:id" element={<PilotDetailPage />} />
        <Route path="/starships" element={<StarShipsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default MainRoute
