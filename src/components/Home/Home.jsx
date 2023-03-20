
import React from 'react';
import FeaturedWorks from '../FeaturedWork/FeaturedWorks';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
// import Navbar from '../Navbar/Navbar';
import RecentPosts from '../RecentPosts/RecentPosts';

function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <Hero/>
    <RecentPosts/>
    <FeaturedWorks/>
    <Footer/>
    </>
  );
}

export default Home;
