const express = require('express');
const app = express();
const Router = express.Router();
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(Router);

Router.post('/search',(req,res)=>{
    
})
// app.listen(3000)

const Mock= require('mockjs');

fs.writeFileSync('./data/data.json',JSON.stringify(Mock.mock(
    {
        "data|40":[
            {
                title:'@ctitle',
                "name":"@cname",
                "phone":/^/,
                "price|100-300":1,
                "image":"@image(100x100)"
            }
        ]
    }
)))