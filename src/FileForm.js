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

    this.submitData().then((response) => {
      this.props.onFileInfoChange(response);
    });
  }

  file() {
    return this.fileInput.current.files[0];
  }

  fileName() {
    return this.file() ? this.file().name : undefined;
  }

  formData() {
    let formData = new FormData();
    formData.append('filename', this.fileName());
    formData.append('file', this.file());
    return formData;
  }

  submitData() {
    return fetch('upload', {
      method: 'POST',
      body: this.formData()
    })
    .then(response => response.json())
    .catch(error => console.error('Request Error:', error));
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
