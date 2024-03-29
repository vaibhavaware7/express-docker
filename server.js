const express = require('express')

const app =express()

const empRouter = require('./routes/emp')
const comRouter = require('./routes/comp')

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/emp",empRouter)
app.use("/comp",comRouter)
app.listen(7777,()=>{

    console.log("server started on 7777")
})
