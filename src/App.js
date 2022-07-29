import React from 'react';
import About from './components/about';
import Coffee from './components/coffee';
import Contacts from './components/contacts';
import Features from './components/features';
import Header from './components/header';


function App() {
  return (
    <div className="container">
      <Header/>
      <Coffee/>
      <Features/>
      <About/>
      <Contacts/>
    </div>
  );
}

export default App;
