import React, { Component } from 'react';
import './App.css';
import FileForm from './FileForm';
import FileInfoTable from './FileInfoTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fileInfo: undefined }
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
        <FileForm onFileInfoChange={this.onFileInfoChange} />

        {this.state.fileInfo &&
          <FileInfoTable fileInfo={this.state.fileInfo} />
        }
      </div>
    );
  }
}

export default App;
