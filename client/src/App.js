import React, { Fragment ,useEffect } from 'react';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/layout/MainPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage"

// Redux
import { Provider } from "react-redux";
import store from "./store/store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';


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
          <Route exact path="/" component={MainPage} />
          <section className="container">
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
