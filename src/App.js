import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages';
import WriteComponent from './components/WriteComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/write" element={<WriteComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
