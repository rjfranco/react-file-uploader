import React from 'react';
import FileInfoTable from './FileInfoTable';
import { fileInfo, fileInfoRows } from './FileInfoTable.helpers'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<FileInfoTable fileInfo={fileInfo} />);
});

describe('#wordCounts', () => {
  it('should produce an array of table rows', () => {
    const fileInfoTable = shallow(<FileInfoTable fileInfo={fileInfo} />);
    fileInfoTable.update();
    expect(fileInfoTable.instance().wordCounts()).toEqual(fileInfoRows);
  });
});
