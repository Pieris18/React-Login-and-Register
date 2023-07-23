
import Navigation from './components/Navigation';
import Login from './components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import Home from './pages/Home';
import ProtectedRoutes from './services/ProtectedRoutes';



function App() {
  return (

    <BrowserRouter>
    <Navigation/>
    <Routes>
      
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>

      <Route path='/' element={<ProtectedRoutes/>} >
        <Route path='/' element={<Home/>} />
      </Route>

    </Routes>
    </BrowserRouter>

  )
}
export default App
