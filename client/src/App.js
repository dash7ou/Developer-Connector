import React, {Fragment} from 'react';
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/layout/MainPage";

import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';


const App =() => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={MainPage} />
      </Fragment>
    </Router>
  );
}

export default App;
