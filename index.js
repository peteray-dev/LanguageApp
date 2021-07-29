const express = require('express');

const mongoose = require('mongoose');
const ApiError = require('./utils/Errors/ApiError');

const postRoute = require('./routes/post.routes')
const userRoute = require('./routes/user.routes')
const cors = require('cors') 
const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())

//routes

app.use('/api/post', postRoute) 
app.use('/api/user', userRoute)


//handling 404 error
app.all('*', (req, res, next)=>{
    next(new ApiError('opps page not found', 404))
}) 

//global error
app.use((err, req, res, next)=>{
    err.statusCode = err.statusCode || 500
    err.status = err.status || 'error'
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack
    })
})

//port 
const PORT = process.env.PORT || 4000

mongoose.connect('mongodb://127.0.0.1:27017/language', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}).then(()=>{
    console.log('database connection is successful...');
}).catch((err)=>{
    console.log(err);
})


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})