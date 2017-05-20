'use strict'

const ImageClientResizer = require('../dist/image-client-resizer.min.js')

const makeFileFromBase64 = (dataurl, filename) => {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  const length = bstr.length
  let u8arr = new Uint8Array(n)

  while (length--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}

describe('ImageClientResizer Test', () => {
  it('Should throw an error if constructor argument is not of type File', () => null)
  it('Should reject a promise if File type is not in: [jpeg, png]', () => null)
  it('Should output a base64 string on resize', () => null)
  it('Should resize an image' => null)
})
