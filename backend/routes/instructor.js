
const express=require('express')
const router=express.Router()
const {instructor}=require('../models')


router.get('/', (req,res)=>{
    instructor.findAll()
    .then((instructors)=>{res.json(instructors)
       
    console.log(instructors)})
    .catch((err)=>{
        if(err){
            console.log(err);

        } 
    }); 
   

})

router.post('/',(req,res)=>{
    instructor.create({
        employee_type:req.body.employeeType,
        first_name:req.body.firstName,
        middle_name:req.body.middleName,
        last_name:req.body.lastName,
        email:req.body.email,
        phone:req.body.phone,
        salary:req.body.salary,
        employment_date:req.body.date,
        course:req.body.course,
        registration_number:req.body.regNum,
        
    })
    .then(console.log(req.body)
        )
    .catch((err)=>{
        if(err){
            console.log(err)
        }})
        res.send('insert');
});
router.put('/',(req,res)=>{
    instructor.update({where:{id:10}})
    .then( res.send('update'))
    .catch(err=>{
        if(err){console.log(err)}
    })
       

    }

    )

router.delete('/',(req,res)=>{
    instructor.destroy(
       {
        where:{id:10}
       }
    )
    .then(res.send(deleted))
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
    res.send('delete')

})


module.exports=router;