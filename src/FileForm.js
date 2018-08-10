import React, { Component } from 'react';

class FileForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    const file = this.fileInput.current.files[0];
    console.log(`Selected file - ${file ? file.name : 'None Set.'}`);
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
