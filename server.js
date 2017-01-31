const express = require('express'),
  path = require('path'),
  multer = require('multer');

const app = express();
var storage = multer.memoryStorage();
var upload = multer({ 
	storage: storage,
	limits: {fileSize: 1000000},
 });
const port = process.env.PORT || 8080;

// 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/get-file-size', upload.single('file'), (req, res) => {
  
  if (req.file){
	  res.json({ size: req.file.size });
  } else {
  	res.json({size: 0});
  }
});

app.listen(port, function() {
  const p = this.address().port;
  console.log(`Server is listening in port ${p}`);
});
