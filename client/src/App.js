import React, {Fragment} from 'react';
import './App.css';

//components
import Input from "./Components/Input";
import Show from "./Components/Show";

function App() {
  return (
    <Fragment>
      <div className="container">
        <Input/>
        <Show/>
      </div>
    </Fragment>
  );
}

export default App;
