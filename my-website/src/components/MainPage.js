import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import Navbar from './Navbar';
import HeaderPage from './HeaderPage';
import CardsPage from './CardsPage';
import UpcommingEventsPage from './UpcommingEventsPage';
import Footer from './Footer';
import BlogsPage from './BlogPage';
import GalleryPage from './GalleryPage';


export default function MainPage() {
  return (
    
      <div>
      
        <Navbar />
        <main>
          <HeaderPage />
          <CardsPage />
          <UpcommingEventsPage />
          <GalleryPage />
          <BlogsPage />
          <Footer />
        </main>
      </div>
   
  );
}

