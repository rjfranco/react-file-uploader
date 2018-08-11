import React from 'react';
import FileInfoTable from './FileInfoTable';
import { fileInfo } from './FileInfoTable.helpers'
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<FileInfoTable fileInfo={fileInfo} />);
});
