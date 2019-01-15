const express = require('express');
const PNGImage = require('pngjs-image');
const app = express();

const dimentionsParser = (dimentionsString) => {
  let dimentionsArray = dimentionsString.split('x');
  if(dimentionsArray.length > 2){
    throw('Dimentions param error: e.g. /100 X100:Y100 | /100x100 X100:Y100');
  }
  return dimentionsArray.map(x => parseInt(x));
}

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/:dimentions', (req, res) => {
  // let [x, y] = dimentionsParser(req.params.dimentions);
  // var image = PNGImage.createImage(x, y ? y : x);
  var image = PNGImage.createImage(100, 300);

  // Get width and height
  console.log(image.getWidth());
  console.log(image.getHeight());

  // Set a pixel at (20, 30) with red, having an alpha value of 100 (half-transparent)
  image.setAt(20, 30, { red:255, green:0, blue:0, alpha:100 });

  // Get index of coordinate in the image buffer
  var index = image.getIndex(20, 30);

  // Print the red color value
  console.log(image.getRed(index));

  image.toBlob((err, data) => {
    res.contentType('png');
    res.send(data);
  })
 
});

app.listen(3000, () => {
  console.log('Server started in port 3000');
});