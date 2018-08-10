import React from 'react';
import FileForm from './FileForm';
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<FileForm />);
});

describe('#fileName', () => {
  it('should return undefined when no file selected', () => {
    const fileForm = mount(<FileForm />);
    fileForm.simulate('submit');

    expect(fileForm.instance().fileName()).toBeUndefined();
  });
})
