import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import TaskList from './components/TaskList.js';

var config = {
    apiKey: "AIzaSyB9UH7J62PGr12REG-l_JmNfIZR4eYnm1w",
    authDomain: "blocitoff-ddca5.firebaseapp.com",
    databaseURL: "https://blocitoff-ddca5.firebaseio.com",
    projectId: "blocitoff-ddca5",
    storageBucket: "blocitoff-ddca5.appspot.com",
    messagingSenderId: "982685916280"
  };
  
  firebase.initializeApp(config);



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Blocitoff</h1>
        </header>
        <p className="App-intro">
          The following sections are components/views inside the SPA
        </p>
        <TaskList firebase={firebase} />
      </div>
    );
  }
}

export default App;