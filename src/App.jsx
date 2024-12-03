import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Service from './pages/Service';
import Company from './pages/Company';
import Career from './pages/Career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Hero from './components/Hero';
import Login from './pages/Login';
import Layout from './pages/Layout';
import NotFount from './pages/NotFount';


function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NotFount/>}/>
        </Route>
        
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
