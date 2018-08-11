import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('#onFileInfoChange', () => {
  it('should set this data to the state', () => {
    const app = shallow(<App />);
    app.instance().onFileInfoChange({test: 'value'});
    expect(app.state('fileInfo').test).toEqual('value');
  });
});
