const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: '*'
}));

const mongoose = require('mongoose');
// fix 1 : sua cho demo 
mongoose.connect('mongodb://127.0.0.1:27017/demo'); 

// fix 2: thay employee theo de
const employee_router = require('./routes/postRoute');
app.use('/api', employee_router);


app.listen(8000, function () {
    console.log('Server is running on port: 8000');
});