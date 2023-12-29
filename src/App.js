import './App.css';
import Header from './containers/Header';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route>404 Not found page</Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
