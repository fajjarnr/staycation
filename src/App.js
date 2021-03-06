import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";
import Checkout from "pages/Checkout";

import InputNumber from "pages/InputNumber";
import InputDate from "pages/InputDate";
import Breadcrumb from "pages/Breadcrumb";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPage}></Route>
        <Route path="/checkout" component={Checkout}></Route>

        <Route exact path="/inputnumber" component={InputNumber}></Route>
        <Route exact path="/inputdate" component={InputDate}></Route>
        <Route exact path="/breadcrumb" component={Breadcrumb}></Route>
      </Router>
    </div>
  );
}

export default App;
