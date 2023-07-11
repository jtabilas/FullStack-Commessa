import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import AddCommessa from './components/AddCommessa';
import EditCommessa from './components/EditCommessa';
import ViewCommessa from './components/ViewCommessa';

function App() {


  return (
    <div className="App">
      <Router>
      <Navbar />

      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addcommessa" element={<AddCommessa />} />
          <Route exact path="/editcommessa/:id" element={<EditCommessa />} />
          <Route exact path="/viewcommessa/:id" element={<ViewCommessa />} />
      </Routes>

      </Router>
    </div>
  );
}

export default App;
