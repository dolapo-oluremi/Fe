import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostPage from './pages/PostPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>


  );
}

export default App;
