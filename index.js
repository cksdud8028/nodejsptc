const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nodejs:<1234>@ptcnodejs.lgiap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected..')).catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('노드제이에스 연습중 ㅋ')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})