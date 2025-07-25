import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Temp';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from './pages/about/About';
import AnimalCare from './pages/animalCare/AnimalCare';
import Events from './pages/events/Events';
import Volunteer from './pages/volunteer/Volunteer';
import Contacts from './pages/contact/Contacts';

import Donate from './pages/home/Donate';
import Contribute from './pages/home/Contribute';
import Awareness from './pages/home/Awareness';
import Sponsor from './pages/home/Sponsor';

import Safety from './pages/animalCare/Safety';
import Approach from './pages/animalCare/Approach';
import Aid from './pages/animalCare/Aid';
import Help from './pages/animalCare/Help';

import Paws from './pages/events/Paws';
import Collars from './pages/events/Collars';
import Kindness from './pages/events/Kindness';
import Shelter from './pages/events/Shelter';
import Click from './pages/volunteer/Click';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About Us" element={<About/>} />
        <Route path="/AnimalCare" element={<AnimalCare/>} />
        <Route path="/Events" element={<Events/>} />
        <Route path="/Volunteer" element={<Volunteer/>} />
        <Route path="/Contacts" element={<Contacts/>} />

        <Route path="/Donate" element={<Donate/>}/>
        <Route path="/Contribute" element={<Contribute/>}/>
        <Route path="/Awareness" element={<Awareness/>}/>
        <Route path="/Sponsor" element={<Sponsor/>}/>

        <Route path="/AnimalCare/Safety" element={<Safety/>}/>
        <Route path="/AnimalCare/Approach" element={<Approach/>}/>
        <Route path="/AnimalCare/Aid" element={<Aid/>}/>
        <Route path="/AnimalCare/Help" element={<Help/>}/>

        <Route path="/Events/Paws" element={<Paws/>}/>
        <Route path="/Events/Collars" element={<Collars/>}/>
        <Route path="/Events/Kindness" element={<Kindness/>}/>
        <Route path="/Events/Shelter" element={<Shelter/>}/>

        <Route path="/Volunteer/Click" element={<Click/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;