import React from 'react';
import FileForm from './FileForm';
import { addFile } from './FileForm.helpers'
import { mount, shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<FileForm />);
});

describe('#file', () => {
  it('should return a file from the input when selected', () => {
    const fileForm = mount(<FileForm />);
    const fileInput = fileForm.find('input');

    addFile(fileInput.instance());
    fileInput.simulate('change');

    expect(fileForm.instance().file().name).toEqual('face.txt');
  })
})

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
});

describe('#formData', () => {
  it('should return a FormData instance', () => {
    const fileForm = mount(<FileForm />);
    const fileInput = fileForm.find('input');

    addFile(fileInput.instance());
    fileInput.simulate('change');

    expect(fileForm.instance().formData().get('filename')).toEqual('face.txt');
  });
});

})
