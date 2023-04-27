import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
