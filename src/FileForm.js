import React, { Component } from 'react';

class FileForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileName = this.fileName.bind(this);
    this.setFileNameState = this.setFileNameState.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      fileName: undefined
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.file()) return;

    return this.submitData().then((response) => {
      this.props.onFileInfoChange(response);
    });
  }

  file() {
    return this.fileInput.current ? this.fileInput.current.files[0] : undefined;
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

  setFileNameState() {
    this.setState({ fileName: this.fileName() });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="file-input">Choose a file</label>
        <input id="file-input" type="file" name="file" ref={this.fileInput} onChange={this.setFileNameState} />
        {this.state.fileName &&
          <p className="file-name">{this.state.fileName}</p>
        }
        <button disabled={!this.state.fileName} type="submit">Send the file</button>
      </form>
    );
  }
}

export default FileForm;
