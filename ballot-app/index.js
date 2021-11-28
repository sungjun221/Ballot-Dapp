const express = require('express')
const app = express()
const port = 3000
app.use(express.static('src'));
app.use(express.static('../ballot-contract/build/contracts'));
app.get('/', (req, res) => {
  res.send('index.html')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});