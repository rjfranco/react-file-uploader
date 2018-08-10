import React, { Component } from 'react';
import './App.css';
import FileForm from './FileForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileInfo: {}
    }

    this.onFileInfoChange = this.onFileInfoChange.bind(this);
  }

  onFileInfoChange(fileInfo) {
    this.setState({ fileInfo: fileInfo });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>File Uploader</h1>
        </header>
        <FileForm fileInfo={this.state.fileInfo} onFileInfoChange={this.onFileInfoChange} />
      </div>
    );
  }
}

export default App;
