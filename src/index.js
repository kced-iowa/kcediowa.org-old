import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './index.css';

// import routes
import Landing from './pages/Landing';
import About from './pages/About';
import Business from './pages/Business';
import Events from './pages/Events';
import News from './pages/News';
import NewsPage from './pages/NewsPage';
import Orgs from './pages/Orgs';
import Visit from './pages/Visit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/business" element={<Business />} />
      <Route path="/events" element={<Events />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsPage />} />
      <Route path="/orgs" element={<Orgs />} />
      <Route path="/visit" element={<Visit />} />
    </Routes>
  </BrowserRouter>
);