const express = require('express')
const path=require('path')
const app = express()
const multer=require('multer')
 const {mergepdf}=require('./merge')
const upload=multer({dest:'uploads/'})



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'/index.html'))
})

app.use('/static',express.static('public'))
const port=3000;

app.post('/merge', upload.array('pdfs'), async (req, res, next) => {
  console.log(req.files);

  const pdfPaths = req.files.map((file) => path.join(__dirname, file.path));

  await mergepdf(pdfPaths);

  res.redirect('http://localhost:3000/static/merged.pdf');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})