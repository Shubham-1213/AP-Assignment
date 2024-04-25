import './App.css'
import FindDoctor from './pages/FindDoctor'
import ViewProfile from './pages/ViewProfile'
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route scrollToTop path="/" element={<FindDoctor />} />
        <Route scrollToTop path="/view-profile" element={<ViewProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;