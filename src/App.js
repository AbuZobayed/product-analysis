import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navber/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blags from "./components/Blogs/Blogs";
import About from "./components/About/About";
import NotFound from './components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/blogs' element={<Blags></Blags>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>

    </Routes>
    
    
    </>
   
  );
}

export default App;
