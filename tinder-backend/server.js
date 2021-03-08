import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
//import the schemas that are defined and exported in separate files
import Cards from './dbCards.js'


//app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:9VuRjsdB5aEBk10m@cluster0.5pprj.mongodb.net/tinderDb?retryWrites=true&w=majority';

//middlewares
app.use(express.json());
app.use(Cors());

//DbConfig
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

//API Endpoints
app.get('/',(req,res)=>{
    res.status(200).send('Hello Tinder World!!');
});

app.post('/tinder/cards',(req,res)=>{
    //Save request body in a variable
    const dbCard = req.body;
    //Create a new entry
    Cards.create(dbCard,(err, data)=>{
        if(err){
            //500 -> Internal server error
            res.status(500).send(err);
        }else{
            //201-> Success
            res.status(201).send(data);
        }
    })
})

app.get('/tinder/cards',(req,res)=>{
    //retrieves all the cards from the database
    Cards.find((err, data)=>{
        if(err){
            //500 -> Internal server error
            res.status(500).send(err);
        }else{
            //201-> Success
            res.status(201).send(data);
        }
    })
})

//Listener
app.listen(port,() => console.log('Listening on tinder local host!!: ${port}'));