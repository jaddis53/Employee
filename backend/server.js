
const {instructor}=require('./models')
const db=require('./models')
const express=require('express')
const cors=require('cors')
const app= express();
const corsOptions={
    origin:'http://localhost:3000'
}


app.use(cors(corsOptions));
app.use(express.urlencoded({extended:true}))
app.use(express.json());

PORT=8081
const instructorRoute=require('./routes/instructor')
app.use('/instructor',instructorRoute)




db.sequelize.sync().then((req)=>{
    app.listen(PORT,()=>{
        console.log(`app is listening on ${PORT}`)
    })

  
} 
) 


