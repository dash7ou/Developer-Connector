import React, { Fragment ,useEffect } from 'react';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import MainPage from "./components/layout/MainPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage"
import Dashboard from "./components/dashboard/dashboard";
import CreateProfile from "./components/profile-forms/CreateProfile";
import AddEducation from "./components/profile-forms/AddEducation";
import AddExperience from "./components/profile-forms/AddExperience";
import Profiles from "./components/profiles/Profiles";
import Profile from "./components/profiles/Profile";

// Redux
import { Provider } from "react-redux";
import store from "./store/store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

// routers
import PrivateRoute from "./routers/PrivateRoute";
import PublicRoute from "./routers/PublicRoute";

import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';
import profile from './reducers/profile';


if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App =() => {
  useEffect(()=>{
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <PublicRoute exact path="/" component={MainPage} />
          <section className="container">
            <Switch>
              <PublicRoute exact path="/login" component={LoginPage} />
              <PublicRoute exact path="/register" component={RegisterPage} />
              <PublicRoute exact path="/developers" component={Profiles} />
              <PublicRoute exact path="/profiles/:id" component={Profile} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <PrivateRoute exact path="/update-profile" component={CreateProfile} />
              <PrivateRoute exact path="/profile/add-experience" component={AddExperience} />
              <PrivateRoute exact path="/profile/add-education" component={AddEducation} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
