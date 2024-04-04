import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/AuthComponents/Login';
import {Register} from './components/AuthComponents/Register'
import { Home } from './components/HomePage/Home';
import { Create } from './components/CreateRestaraunt/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home/:id' element={<Home/>}/>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create/:id' element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
