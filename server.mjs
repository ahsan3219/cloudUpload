import express from 'express'
const app = express()
const port =  3500 //process.env.PORT||

app.get('/', (req, res) => {
  res.send('Hello world from Ahsan Raza PC'+req.ip)
  console.log('Hello world from Ahsan Raza PC'+req.ip)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})