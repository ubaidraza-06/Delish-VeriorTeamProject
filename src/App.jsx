import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CTABanner from './components/CTABanner.jsx';
import Team from './pages/Team.jsx';
import TeamDetails from './pages/TeamDetails.jsx';
import Reservations from './pages/Reservations.jsx';
import Shop from './assets/Shop'
import Shopdetails from './assets/Shopdetails'
import Menu from './assets/Menu'
import './App.css'

function App() {
  <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Team />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team-details" element={<TeamDetails />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </main>
        <CTABanner />
        <Footer />
      </div>
    );
  }
  return (
    <>
      <Menu />
      {/* <Shop /> */}
      {/* <Shopdetails /> */}
    </>
  )
}

export default App
