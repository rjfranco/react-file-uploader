import React from 'react';
import FileForm from './FileForm';
import { addFile, mockResponse } from './FileForm.helpers'
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
  });
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

// This seems to be the right idea from docs, I can find — but spy is never called
// I can't seem to find better documentation for spying / mocking component prop functions
describe.skip('#handleSubmit', () => {
  const spy = jest.fn();
  const fileForm = mount(<FileForm onFileInfoChange={spy} />);
  const fileInput = fileForm.find('input');
  addFile(fileInput.instance());

  fileForm.instance().submitData = jest.fn().mockImplementation(() => Promise.resolve('called'));
  fileForm.instance().handleSubmit({preventDefault: () => {}});

  expect(spy).toBeCalledWith('called');
});

describe('#submitData', () => {
  it('should return a json data set on success', () => {
    window.fetch = jest.fn().mockImplementation(function() {
      return Promise.resolve(mockResponse(200, null, '{"total":3,"counts":{"data":1,"some":1,"test":1}}'));
    });

    const fileForm = mount(<FileForm />);
    return fileForm.instance().submitData().then((data) => {
      expect(data).toEqual({"total":3,"counts":{"data":1,"some":1,"test":1}});
    });
  });

  it('should log to the console on error', () => {
    console.error = jest.fn();
    window.fetch = jest.fn().mockImplementation(function() {
      return Promise.reject(mockResponse(500, 'Oh no!', '{"error": "Something went terribly wrong."}'));
    });

    const fileForm = mount(<FileForm />);
    return fileForm.instance().submitData().catch((data) => {
      expect(console.error).toBeCalled();
    });
  })
})
