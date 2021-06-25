import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import Pusher from 'pusher'

//app cnofig
const app = express();
const port = process.env.PORT || 8080;

//middlewares
app.use(express.json())
app.use(cors());
//DB config


const connection_url ='mongodb+srv://admin:2UgKVuEtIFuPRdN7@cluster0.nsms6.mongodb.net/instaDB?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('DB Connected')
})
//api routes
app.get('/', (req,res) => res.status(200).send('hello world'))
app.post('/upload', (req,res) => {
    
})
//listen
app.listen(port, () => console.log(`listening on localhost:${port}`))