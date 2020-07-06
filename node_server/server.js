const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 8001

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

products=[
    {id:1,title:'Mouse',category:'Electronics',productInfo:'Electronics Information1'},
    {id:2,title:'Keyboard',category:'Electronics',productInfo:'Electronics Information2'},
    {id:3,title:'Laptop',category:'Electronics',productInfo:'Electronics Information3'},
    {id:4,title:'Home appliances1',category:'Home appliances',productInfo:'Home appliances Information1'},
    {id:5,title:'Home appliances2',category:'Home appliances',productInfo:'Home appliances Information2'}
] 

app.get('/', (req, res) => res.send('Server is running!'))

app.get('/getProducts', (req, res) => res.send(products))

app.delete('/deleteProduct/:id', (req, res) => {
    products=products.filter(obj=>obj.id!=req.params.id)
    res.send(products)
})

app.listen(port, () => console.log(`listening on port ${port}!`))