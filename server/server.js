require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const playersCtrl = require('./controllers/playersCtrl')



app.use(express.json())


app.get('/api/players', playersCtrl.getPlayerOption)
app.post('/api/players', playersCtrl.add)
app.delete('/api/players/:id', playersCtrl.letGo)
app.put('/api/players/:id', playersCtrl.statChange)



app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} YoYo I'm workin'`))