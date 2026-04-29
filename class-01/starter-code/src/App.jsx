import './App.css';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      {/* LAB01: Your App component should render a Header, Footer and Gallery component, each of which is defined in their own files. */}
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
