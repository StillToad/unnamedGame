import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home';

function App() {

  return (
    <><Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router><ToastContainer /></>
  )
}

export default App
