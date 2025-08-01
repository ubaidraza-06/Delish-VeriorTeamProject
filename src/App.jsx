import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CTABanner from './components/CTABanner.jsx';
import Team from './pages/Team.jsx';
import TeamDetails from './pages/TeamDetails.jsx';
import Reservations from './pages/Reservations.jsx';
import Shop from './pages/Shop.jsx';
import Shopdetails from './pages/Shopdetails.jsx';
import Menu from './pages/Menu.jsx';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Team />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team-details" element={<TeamDetails />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-details" element={<Shopdetails />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App
