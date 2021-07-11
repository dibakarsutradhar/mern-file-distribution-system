import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Navbar from './components/Landing/Navbar';
import Landing from './components/Landing/Landing';
import Footer from './components/Landing/Footer';
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import StudentLogin from './components/Auth/Login/StudentLogin'
import LecturerLogin from './components/Auth/Login/LecturerLogin';
import LecturerRegister from './components/Auth/Register/LecturerRegister';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={ Landing } />
        <Grid 
          container
          justify = "center"
          pacing={0}
          alignItems="center"
          direction='column'
        >
          <Route exact path="/register" component={ Register } />
          <Route exact path="/register/lecturer" component={ LecturerRegister } />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/login/student" component={ StudentLogin } />
          <Route exact path="/login/lecturer" component={ LecturerLogin } />
        </Grid>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
