export function addFile(element) {
  const file = new File(['@_@'], 'face.txt', {type: 'text/plain'});
  return Object.defineProperty(element, 'files', {
    value: [file]
  });
}
