# ImageClientResizer

A very basic library to resize image on the client side using JS

## Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ImageClientResizer Demo</title>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body class="container">
    <h1 class="page-header">ImageClientResizer Demo</h1>

    <p class="lead">
      Pick an image file and set the size to resize
    </p>

    <form class="form-inline">
      <div class="form-group">
        <label class="sr-only" for="width">Width</label>
        <input type="email" class="form-control" id="width" onchange="handleForm()" placeholder="width">
      </div>
      <div class="form-group">
        <label class="sr-only" for="height">Height</label>
        <input type="email" class="form-control" id="height" onchange="handleForm()" placeholder="Height">
      </div>
      <div class="form-group">
        <input required id="file" type="file" onchange="handleForm()" />
      </div>
    </form>

    <script src="../dist/image-client-resizer.min.js"></script>
    <script>
    window.handleForm = function(file) {
      var file = document.getElementById('file').files[0] || null
      var width = parseInt(document.getElementById('width').value)
      var height = parseInt(document.getElementById('height').value)

      if (!file || !file instanceof File || !width || !height) {
        return
      }

      new ImageClientResizer(file)
        .resize(width, height)
        .then((imageAsBase64) => {
          var img = document.createElement('img')
          img.src = imageAsBase64
          document.body.appendChild(img)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    </script>
  </body>
</html>
```

## Contributors

* Ibán Domínguez

## License

MIT
