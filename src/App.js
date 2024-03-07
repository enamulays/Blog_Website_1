import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/BlogWebsite/Home';
import About from './Pages/BlogWebsite/About';
import Blog from './Pages/BlogWebsite/Blog';
import Sponser from './Pages/BlogWebsite/Sponser';
import Contact from './Pages/BlogWebsite/Contact';
import Error from './Pages/BlogWebsite/Error';
import Footer from './Pages/BlogWebsite/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Blog' element={<Blog/>}></Route>
          <Route path='/Sponser' element={<Sponser/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/*' element={<Error/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;