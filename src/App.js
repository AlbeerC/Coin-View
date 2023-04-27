import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path='/detail' element={ <ItemDetailContainer/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
