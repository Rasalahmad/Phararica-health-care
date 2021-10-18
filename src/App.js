
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Doctors from './components/Doctors/Doctors/Doctors';

import Booking from './components/Home/Booking/Booking';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/Shared/NotFound/NotFound';
import Register from './components/Authentication/Register/Register';
import Login from './components/Authentication/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {


  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/booking/:bookId'>
              <Booking></Booking>
            </PrivateRoute>
            <Route path='/doctors'>
              <Doctors></Doctors>
            </Route>
            <Route path='/signup'>
              <Register></Register>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
