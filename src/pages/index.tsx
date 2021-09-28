import React from 'react';

// components
import Landing from '../components/sections/Landing';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import SocialMediaLinks from '../components/SocialMediaLinks';
import ThemeController from '../components/ThemeController';
import Portfolio from '../components/sections/Portfolio';

/**
 * Main page component
 * @return {JSX.Element} : The JSX for the Main page
 */
export default function Index() {
  return (
    <>
      <ThemeController />
      <SocialMediaLinks />
      <div
        style={{
          scrollSnapPointsY: 'repeat(100vh)',
          scrollSnapType: 'y mandatory',
          height: '100vh',
        }}
      >
        <Landing />
        <Services />
        <About />
        <Skills />
        <Portfolio />
      </div>
    </>
  );
}
