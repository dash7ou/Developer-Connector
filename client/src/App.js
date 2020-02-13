import React, {Fragment} from 'react';
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/layout/MainPage";

import 'rsuite/dist/styles/rsuite-default.css';
import './App.css';


const App =() => {
  return (
    <Fragment>
      <Navbar />
      <MainPage />
    </Fragment>
  );
}

export default App;
