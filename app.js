const express = require('express');
const app = express();
const path = require('path');
const user=require('./router/user')
const singin=require('./router/singin')

app.set('port', process.env.port || 1010) 

app.get('/', (req, res, next) =>{
    res.send('<h1>Hello world<h1>');
})
// ValidationError: data1 validation failed:
// here you should use the following
app.use(express.json())
app.use('/user',user)
app.use('/singin',singin)

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})