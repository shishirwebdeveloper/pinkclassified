import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Postfreead from './components/Postfreead';
import Newad from './components/Newad';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import { BrowserRouter,Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/postfreead' element={<Postfreead/>}/>
        <Route path='/newad' element={<Newad/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
