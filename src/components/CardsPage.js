import React from 'react';
import { ArrowRight } from 'lucide-react';



import MentorImage from '../assets/1.png';
import FundingImage from '../assets/2.png';
import CoworkingImage from '../assets/3.png';
import NetworkingImage from '../assets/4.png';
import TechImage from '../assets/5.png';
import MarketImage from '../assets/6.png';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl mt-0">
      <div
        className="relative w-full h-48"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

const CardPage = () => {
  const cards = [
    {
      title: "Mentorship Program",
      description: "Get guidance from industry experts to accelerate your startup growth.",
      imageUrl: MentorImage,
    },
    {
      title: "Funding Opportunities",
      description: "Access to a network of investors and funding resources for your startup.",
      imageUrl: FundingImage,
    },
    {
      title: "Coworking Space",
      description: "Modern, fully-equipped workspace to foster collaboration and productivity.",
      imageUrl: CoworkingImage,
    },
    {
      title: "Networking Events",
      description: "Regular events to connect with fellow entrepreneurs and industry leaders.",
      imageUrl: NetworkingImage,
    },
    {
      title: "Technical Resources",
      description: "Access to cutting-edge tools and technologies to build your product.",
      imageUrl: TechImage,
    },
    {
      title: "Market Research",
      description: "Comprehensive market analysis to validate and refine your business idea.",
      imageUrl: MarketImage,
    },
  ];

  return (
   <>
 

    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  </>  
  );
};

export default CardPage;