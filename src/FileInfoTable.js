import React, { Component } from 'react';

class FileInfoTable extends Component {
  wordCounts() {
    const listItems = [];
    let index = 0;

    for (let prop in this.props.fileInfo.counts) {
      listItems.push(
        <tr key={index}>
          <td>{prop}</td>
          <td>{this.props.fileInfo.counts[prop]}</td>
        </tr>
      )
      index++;
    }

    return listItems;
  }

  render() {
    return (
      <main>
        <h2>Total Words: <span>{this.props.fileInfo.total}</span></h2>

        <h3>Appearances per word</h3>
        <table>
          <tbody>
            {this.wordCounts()}
          </tbody>
        </table>
      </main>
    );
  }
}

export default FileInfoTable;
