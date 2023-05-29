var express = require('express');
var app = express();
const abc = require('uuid');
v4 = abc.v4();
v3 = abc.v3;
console.log(v4);
console.log(v3.DNS);

app.listen(8000, ()=>{
    console.log("Server listening at port http://localhost:8000")
})
