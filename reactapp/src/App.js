import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import FrontPage from './FrontPage';
import ProductsPage from './ProductsPage';

function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path='' element={<FrontPage />} />
        <Route path="/products" element={<ProductsPage />} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
