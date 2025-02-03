const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bookRouter = require('./Routes/BookRoutes')
const userRouter = require('./Routes/UserRoutes')
const orderRouter = require('./Routes/OrderRoutes')

app.use(express.json())
app.use("", bookRouter);
app.use("", userRouter);
app.use("",orderRouter);



app.listen('5000',()=>console.log('server running on 5000'))
mongoose.connect('mongodb+srv://SriLakshmiPriyaJ:Slp2005p@mycluster.hnuup.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster')
.then(()=> console.log('database connected..'))
.catch((err) => console.log(err))

app.get('/',(req,res)=>{
  res.send('server reacted')
})
