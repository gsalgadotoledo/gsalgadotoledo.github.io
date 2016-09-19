import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Carrousel from './components/Carrousel';
import Testimonial from './components/Testimonial';
import Buy from './components/Buy';

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Home />
        <About />
        <Features />
        <Carrousel />
        <Testimonial />
        <Buy />
        <Footer />
      </div>
    )
  }
}

export default App