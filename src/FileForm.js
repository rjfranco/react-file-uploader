import React, { Component } from 'react';

class FileForm extends Component {
  constructor(props) {
    super(props);

    this.fileName = this.fileName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(`Selected file - ${this.fileName()}`);
  }

  fileName() {
    const file = this.fileInput.current.files[0];
    return file ? file.name : undefined;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="file" name="file" ref={this.fileInput} />
        <button type="submit">Send the file.</button>
      </form>
    );
  }
}

export default FileForm;
