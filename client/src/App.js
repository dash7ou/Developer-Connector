import React, {Fragment} from 'react';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/layout/MainPage";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage"

import { Provider } from "react-redux";
import store from "./store/store"

import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';


const App =() => {
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
