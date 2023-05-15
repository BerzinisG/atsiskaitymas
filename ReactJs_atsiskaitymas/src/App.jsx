import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import { useContext } from 'react';
import Header from './components/Molecules/Header';
import Footer from './components/Molecules/Footer';
import Register from './components/Pages/Register';
import LogIn from './components/Pages/LogIn';
import Home from './components/Pages/Home';
import Add from './components/Pages/Add';
import UsersContext from './context/UsersContext';

const App = () => {
  const { currentUser } = useContext(UsersContext);
  return ( 
    <>
    <Header />
      <Routes>
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<LogIn />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Add' element={<Add />} />
        
      </Routes>
    <Footer />
    </>
  )

}

export default App;
