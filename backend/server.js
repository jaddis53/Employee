const bodyParser=require('body-parser')
const {instructor}=require('./models')
const db=require('./models')
const express=require('express')
const cors=require('cors')
const app= express();
const corsOptions={
    origin:'http://localhost:3000'
}


app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

PORT=8081
const instructorRoute=require('./routes/instructor')
app.use('/instructor',instructorRoute)

app.get('/get', (req,res)=>{
    instructor.findAll()
    .then((instructors)=>{res.json(instructors)
       
    console.log(instructors)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
    res.send('get')

})




db.sequelize.sync().then((req)=>{
    app.listen(PORT,()=>{
        console.log(`app is listening on ${PORT}`)
    })

  
} 
) 


