import React from 'react';
import PersonalInfo from './components/InfoPersonal';
import Studies from './components/estudios';
import Tools from './components/herramientas';
import SportsGallery from './components/deportes';
import "./eslilos/App.css"
function App() {
  return (
    <div className="body">
      <PersonalInfo />
      <Studies />
      <Tools />
      <SportsGallery />
    </div>
  );
}

export default App;
