
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Doctors from './components/Doctors/Doctors/Doctors';

import Booking from './components/Home/Booking/Booking';
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';


function App() {
  
  
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path = '/'>
              <Home></Home>
          </Route>
          <Route path = '/home'>
              <Home></Home>
          </Route>
          <Route path = '/services'>
              <Services></Services>
          </Route>
          <Route path = '/booking/:bookId'>
            <Booking></Booking>
          </Route>
          <Route path = '/doctors'>
              <Doctors></Doctors>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
