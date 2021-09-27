import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const port = 80


const app = express()
app.use(express.static(path.join(__dirname,'../pi_dashboard/public')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../pi_dashboard/public/index.html'))
})

app.get('/data', (req, res) => {
  let test = "test"
  res.json({test})
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})