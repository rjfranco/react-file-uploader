export function addFile(element) {
  const file = new File(['@_@'], 'face.txt', {type: 'text/plain'});
  return Object.defineProperty(element, 'files', {
    value: [file]
  });
}

export function mockResponse(status, statusText, response) {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {'Content-type': 'application/json'}
  });
};
