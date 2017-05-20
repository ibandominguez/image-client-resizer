'use strict'

class ImageResizer {
  static ALLOWED_TYPES = [
    'image/jpeg',
    'image/png'
  ]

  constructor(file: File) {
    this.file = file
  }

  isValid() : boolean {
    return ImageResizer.ALLOWED_TYPES.includes(this.file.type)
  }

  resize(width: number, height: number) : Promise {
    const canvas = Object.assign(document.createElement('canvas'), { width, height })
    const image  = new Image(width, height)
    const reader = new FileReader()

    return new Promise((resolve, reject) => {
      if (!this.isValid()) {
        return reject(new Error(`File type should be one of ${ImageResizer.ALLOWED_TYPES.join(', ')}`))
      }

      reader.readAsDataURL(this.file)
      reader.onload = (event) => {
        image.src = event.target.result
        image.onload = () => {
          canvas.getContext('2d').drawImage(image, 0, 0, width, height)
          resolve(canvas.toDataURL(this.file.type))
        }
      }
    })
  }
}
