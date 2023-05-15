import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Molecules/Header';
import Footer from './components/Molecules/Footer';
import Register from './components/Pages/Register';
import LogIn from './components/Pages/LogIn';
import Home from './components/Pages/Home';
import Add from './components/Pages/Add';

const App = () => {
  return ( 
    <>
    <Header />
    <Register />
    <Routes>
      
      <Route path='/Login' element={<LogIn />}>
      <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Add" element={<Add />} />
        </Route>    
    </Routes>

    <Footer />
    </>
  )

}

export default App;
