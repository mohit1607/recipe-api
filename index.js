const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const Recipe = require('./models/recipe')
require('./db/conn')

// const port = 8080|| process.env.PORT;

//middlewares
app.use(bodyParser.json({limit:'30mb', extended: true}))  // use to convert post request to req.body
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))
app.use(express.json())
app.use(cors())


//queries
// app.get('/', (req,res) => {
//    try{
//     console.log('get request on /')
//      res.send('hello hello moshi moshi')
//    }catch(e){
//     console.error(e)
//     res.status(400).send(e)
//    }
// })

app.post('/', async(req, res) => {
    try{
     const newRecipe = req.body;
    const addData = new Recipe(newRecipe)
    const insertedData = await addData.save()
    console.log(insertedData, req.body)
    res.status(201).send(insertedData)
    console.log('post request on /')
    }catch(e) {
        console.error(e)
        res.status(400).send(e)
    }
    // for the range and pagination the range should be defined from where to where you want documents.
})

app.get('/', async(req,res) => {
    try {
        const allRecipes = await Recipe.find({}).limit(100)
        res.status(200).send(allRecipes)
         console.log('post request on /')
    } catch (e) {
        console.error(e)
    }
})

app.listen(process.env.PORT, () =>{
    console.log(`connection established with the port ${port}`);
})