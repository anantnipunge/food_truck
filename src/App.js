import './App.css'
import React from 'react'
import LandingPage from './components/ImageCard'
import AboutPage from './components/About';
import FooterPage from './components/Footer';
import SliderScreen from './components/SliderScreen';
import { ChakraProvider } from '@chakra-ui/react';



const App = () => {
  return (
    <ChakraProvider>
      <LandingPage />
      <AboutPage />
      <SliderScreen />
      <FooterPage />
    </ChakraProvider>
  );
}

export default App
