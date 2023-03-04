import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar';
import Home from './routes/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './routes/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='productos/:cat_id' element={<Products />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
