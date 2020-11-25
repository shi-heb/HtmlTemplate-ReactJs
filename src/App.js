import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
import After from './pages/After'
import Product from './components/Products'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Header/>
      <switch>
      <Route path = "/" exact component = {Home}/>
      <Route path = "/products"exact component = {Product}/>
      </switch>
      <Footer/>
      <After/>
      </Router>
      </div>
    
    
  );
}

export default App;
