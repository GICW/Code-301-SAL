import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Explore from './Explore';
import './app.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Explore />
        <Footer />
      </div>
    );
  }
}

export default App;
