import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import { SmurfContext } from '../contexts/SmurfContext'
import SmurfInput from './SmurfInput'
import SmurfList from './SmurfList';

function App() {

  const [smurf,setSmurf] = useState([]);

	const addSmurf = item => {
		setSmurf([...smurf, item]);
	};


  useEffect (() => {
    axios.get('http://localhost:3333/smurfs')
    .then( response => {
      console.log(response.data[0])
      setSmurf(response.data)
    }
    )
    .catch(function (error) {
      console.log(error);
    });
  },[])


  //console.log(smurf)

  return (
    <div className="App">
      <SmurfContext.Provider value={{smurf, addSmurf}}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfInput />
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
