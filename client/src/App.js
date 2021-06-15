import React, {Fragment} from 'react';
import './App.css';
import { BrowserRouter,Switch, Route } from "react-router-dom";

//components
import Input from "./Components/Input";
import Show from "./Components/Show";
import Header from "./Components/Header";
import Second from "./Components/Second";
import Logout from "./Components/Logout";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
      <Header/>
        <Switch>
        <Route path="/Second" component={Second} />
        <Route path="/Logout" component={Logout} />
          <Fragment>        
              <Input/>
              <Show/>        
          </Fragment>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
