if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
// percobaan berikutnya
// percobaan 2
// percobaan 3
// percobaan 4
// percobaan 5

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})