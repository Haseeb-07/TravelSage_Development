import React from 'react';
import PackageCard from '../Components/PackageCard';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../Components/Packages.css';

function Packages() {
  return (
    <>
      <Navbar />
      <div className='book'><h1>Book Your Package!</h1></div>
      <PackageCard />
      <Footer />
    </>
  );
}

export default Packages;
