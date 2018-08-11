import React, { Component } from 'react';

class FileInfoTable extends Component {
  wordCounts() {
    const listItems = [];

    for (let prop in this.props.fileInfo.counts) {
      listItems.push(
        <tr>
          <td>{prop}</td>
          <td>{this.props.fileInfo.counts[prop]}</td>
        </tr>
      )
    }

    return listItems;
  }

  render() {
    return (
      <main>
        <h2>Total Words: {this.props.fileInfo.total}</h2>

        <h3>Appearances per word</h3>
        <table>
          {this.wordCounts()}
        </table>
      </main>
    );
  }
}

export default FileInfoTable;
