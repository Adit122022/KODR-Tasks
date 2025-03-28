import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import ImageDetail from './components/pages/ImageDetails';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images/:id" element={<ImageDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
