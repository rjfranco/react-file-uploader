import React from 'react';

const fileInfo = {
  counts: {
    data: '1',
    some: '2',
    test: '3'
  },
  total: 6
}

const fileInfoRows = [
  <tr key={0}><td>data</td><td>1</td></tr>,
  <tr key={1}><td>some</td><td>2</td></tr>,
  <tr key={2}><td>test</td><td>3</td></tr>
]

export { fileInfo, fileInfoRows }
