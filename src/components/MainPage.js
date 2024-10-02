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
        
        
          <div className="mt-10 text-center mb-2">
            <h2 className="text-5xl font-bold mb-5 mt-5">We Offer Expert Guidance</h2>
             <p className="text-gray-600 mb-6">
                We have mutiple programs to make your Business A BIG SUCCESS!!
          </p>
        </div>
         
          <CardsPage />

          <div className="mt-10 text-center mb-2">
            <h2 className="text-5xl font-bold mb-5 mt-5">Join Our Next Event</h2>
             <p className="text-gray-600 mb-6">
                Don't miss out on the opportunity to be part of our thriving startup community.
          </p>
        </div>

          
          <UpcommingEventsPage />

          <div className="mt-10 text-center mb-2">
            <h2 className="text-5xl font-bold mb-5 mt-5">Visit Our Gallery</h2>
             <p className="text-gray-600 mb-6">
               Have a Sneek-Peek into what is happeing around.
          </p>
        </div>

          <GalleryPage />

          <div className="mt-10 text-center mb-2">
            <h2 className="text-5xl font-bold mb-5 mt-5">Get Up-To Date</h2>
             <p className="text-gray-600 mb-6">
                We diliver our plan and next steps through our Blogs!!, Have a Look.
          </p>
        </div>
          <BlogsPage />
          <Footer />
        </main>
      </div>
   
  );
}

