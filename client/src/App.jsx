import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from './components/Layout/Layout';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' element={ < Layout /> }>
        <Route path='/signup' element={ < SignUp /> }/>
        <Route path='/signin' element={ < SignIn /> }/>
      </Route>
    </Routes>
  );
}

export default App
