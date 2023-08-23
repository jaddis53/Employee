
const express=require('express')
const router=express.Router()
const {instructor}=require('../models')


router.get('/', (req,res)=>{
    instructor.findAll()
    .then((instructors)=>{res.send(instructors)
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
        date:req.body.date,
        course:req.body.course,
        registration_number:req.body.regNum,
        
///try
        // employee_type:'Admin',
        // first_name:'Kunta',
        // middle_name:'G.',
        // last_name:'Kunte',
        // email:'jayaddis@gmail.com',
        // phone: '098478692',
        // salary:40320,
        // date:'09-09-2023',
        // course:'Graphic Design',
        // registration_number:890

    })
    .then(console.log(req.body)
        )
    .catch((err)=>{
        if(err){
            console.log(err)
        }})
        res.send('insert');
});
// router.put(
//     instructor.update('/',
//     (req,res)=>{
//         res.send('update')

//     }

//     )
// )
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