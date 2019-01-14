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
  let [x, y] = dimentionsParser(req.params.dimentions);
  var image = PNGImage.createImage(x, y ? y : x);
  res.contentType('png');
  res.send(image);
});

app.listen(3000, () => {
  console.log('Server started in port 3000');
});