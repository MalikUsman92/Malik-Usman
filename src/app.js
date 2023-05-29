var express = require('express');
var mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var app = express();
const abc = require('uuid');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT ||8000

v4 = abc.v4();
v3 = abc.v3;
console.log(v4);
console.log(v3.DNS);

app.get('/', (req,res)=>{
    res.send('<h1>Welcome Usman</h1>');
});

app.post('/',(req,res)=>{
    res.status(201).send(req.body)
    
});

const start = async()=>{
    try{
        await mongoose.connect('mongodb+srv://MalikUsman92:Mmuk92870MDB@cluster0.cwjexbu.mongodb.net/?retryWrites=true&w=majority')
        app.listen(PORT, ()=>{
            console.log(`Server listening at port http://localhost:${PORT}`)
        });
    } catch(e){
        console.log(e.message)
    }

};
start();

