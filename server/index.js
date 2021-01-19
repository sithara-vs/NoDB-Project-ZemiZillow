const express = require('express');
const app = express();

app.use(express.json())

// ENDPOINTS
const showCtrl = require('./showCtrl');
app.get('/api/properties', showCtrl.getProperties)
//app.get('/api/list',showCtrl.getList)
app.post('/api/properties',showCtrl.addProperties)

app.put('/api/property/:id',showCtrl.updateProperty)

app.delete('/api/property/:id', showCtrl.removeProperty)

app.listen(7777, () => console.log('listening on port 7777'))