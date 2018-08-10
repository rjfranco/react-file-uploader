import React, { Component } from 'react';
import './App.css';
import FileForm from './FileForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>File Uploader</h1>
        </header>
        <FileForm />
      </div>
    );
  }
}

export default App;
