import React from 'react';
import FileForm from './FileForm';
import { addFile } from './FileForm.helpers'
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

  it('should return a filename when one is set', () => {
    const fileForm = mount(<FileForm />);
    const fileInput = fileForm.find('input');

    addFile(fileInput.instance());
    fileInput.simulate('change');

    expect(fileForm.instance().fileName()).toEqual('face.txt');
  });
})
