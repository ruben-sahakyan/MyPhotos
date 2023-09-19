import './App.css'
import {Route, Routes} from "react-router-dom";
import Layout from './components/Layout/Layout';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ForgotPassword from './components/ForgotPassword/ForgotPassowrd';
import PostsWall from './components/PostsWall/PostsWall';
import { UserContextProvider } from './components/Context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={ < Layout /> }>
          <Route index element={ < PostsWall /> }/>
          <Route path='/signup' element={ < SignUp /> }/>
          <Route path='/signin' element={ < SignIn /> }/>
          <Route path='/forgot_password' element={ < ForgotPassword /> }/>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App
