import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Gallery from './pages/Gallery'; // ✅ Import Gallery page
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/gallery" element={<Gallery />} /> {/* ✅ Add Gallery Route */}
      </Routes>
    </>
  );
};

export default App;
