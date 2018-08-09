import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('#getFilename', () => {
  it('should return an empty string when no file selected', () => {
    const app = mount(<App />);
    const form = app.find('form');
    form.simulate('submit');

    expect(app.instance().getFilename()).toEqual('');
  });
})
