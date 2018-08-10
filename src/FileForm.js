import React, { Component } from 'react';

class FileForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.file()) return;
  
    const formData = this.setupFormData();
  }

  file() {
    return this.fileInput.current.files[0];
  }

  fileName() {
    return this.file() ? this.file().name : undefined;
  }

  setupFormData() {
    let formData = new FormData();
    formData.append('file', this.file())
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
