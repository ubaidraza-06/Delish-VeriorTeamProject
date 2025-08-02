import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import CTABanner from './components/CTABanner.jsx';
import HomeThree from './pages/HomeThree.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Team from './pages/Team.jsx';
import TeamDetails from './pages/TeamDetails.jsx';
import Reservations from './pages/Reservations.jsx';
import Shop from './pages/Shop.jsx';
import Shopdetails from './pages/Shopdetails.jsx';
import Menu from './pages/Menu.jsx';
import HomePageOne from './pages/HomePageOne';
import HomePageTwo from './pages/HomePageTwo.jsx';
import Gallery from './pages/Gallery.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import './App.css';

// Component to conditionally render Header based on route
const ConditionalHeader = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Don't render Header on home page since HomeThree has its own navigation
  if (isHomePage) {
    return null;
  }
  
  return <Header />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ConditionalHeader />
        <main>
          <Routes>
            <Route path="/" element={<HomePageOne />} />
            <Route path="/homepage-three" element={<HomeThree />} />
            <Route path="/homepage-two" element={<HomePageTwo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/team-details" element={<TeamDetails />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop-details" element={<Shopdetails />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details" element={<BlogDetails />} />
          </Routes>
        </main>
        <CTABanner />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
