import './App.css';
import React, {useState} from 'react';
import Homepage from './pages/Home';
import Footerpage from './pages/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'semantic-ui-css/semantic.min.css';

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <Homepage/>
      <Footerpage />
    </div>
  );
}

export default App;
