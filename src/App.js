import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event,) {
    event.preventDefault();
    alert(`Selected file -  ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>File Uploader</h1>
        </header>
        <form onSubmit={this.handleSubmit}>
          <input type="file" name="file" ref={this.fileInput} />
          <button type="submit">Send the file.</button>
        </form>
      </div>
    );
  }
}

export default App;
