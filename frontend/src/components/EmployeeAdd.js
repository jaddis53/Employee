import {useState,React} from 'react';
import axios from 'axios'
export const EmployeeAdd=()=>{

    const[employeeType,setEmployeeType]=useState('')
    const [firstName,setFirstName]=useState('');
    const [middleName,setMiddleName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [salary,setSalary]=useState('');
    const [date,setDate]=useState('');
    const [course,setCourse]=useState({});
    const [regNum,setRegNum]=useState('')



    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        return await axios
        .post("http://localhost:8081/instructor",{employeeType,firstName,middleName,lastName,email,phone,salary,date,course,regNum})
        .then((res)=>{console.log(res)})
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })
        

    }


    return(
        <section>
        <div><span>Empolyee</span> </div>
        <div><p>Employee/Add new</p></div>
        <div>
        <h2>Employee information</h2>
        <form onSubmit={handleSubmit}> 
        <label for="employeeType">Employee type:</label><br/>
        <select id='employeeType' name='employeeType' value={employeeType} onChange={(e)=>{setEmployeeType(e.target.value )}}>
            <option value='' selected='selected'>select type</option>
            <option value='Admin'>Admin</option>
            <option value='Manager'>Manager</option>
            <option value='Accountant'>Accountant</option>
            <option value='Instructor'>Instructor</option>
        </select><br/>
        <label for='firstName'>First Name:</label><br/>
        <input type='text' id='firstName' required value={firstName} onChange={(e)=>{setFirstName(e.target.value )}} name='firstName' placeholder='First Name of employee' autoComplete='off'/><br/>
        <label for='middleName'>Middle Name:</label><br/>
        <input type='text' id='middleName' required value={middleName} onChange={(e)=>{setMiddleName(e.target.value )}} name='middleName' placeholder='Middle Name of employee' autoComplete='off'/><br/>
        <label for='lastName'>Last Name:</label><br/>
        <input type='text' id='lastName' required value={lastName} onChange={(e)=>{setLastName(e.target.value )}} name='lastName' placeholder='Last Name of employee' autoComplete='off'/><br/>
        <label for='email'>Email</label><br/>
        <input type='email' id='email' required value={email} onChange={(e)=>{setEmail(e.target.value )}} name='email' placeholder='Email' autoComplete='off'/><br/>
        <label for='phone'>Phone</label><br/>
        <input type='tel' id='phone' required value={phone} onChange={(e)=>{setPhone(e.target.value )}} name='phone' placeholder='Phone Number' autoComplete='off'/><br/>
        <label for='salary'>Salary</label><br/>
        <input type='number' id='salary' required value={salary} onChange={(e)=>{setSalary(e.target.value )}} name='salary' placeholder='Enter Salary' autoComplete='off'/><br/>
        <label for='date'>Employment date</label><br/>
        <input type='date' id='date' required value={date} onChange={(e)=>{setDate(e.target.value )}} name='date' placeholder='09--------' autoComplete='off'/><br/>
        <label for='course'>Course</label><br/>
        <select id='course' name='course' onChange={(e)=>{setCourse(e.target.value )}} multiple={true}>
            <option value='' selected='selected'>select course</option>
            <option value='graphic-design'>Graphic design</option>
            <option value='digital-marketing'>Digital marketing</option>
            <option value='photography'>Photography</option>
            <option value='animation'>Animation and motion design</option>
        </select><br/>
        <label for='regNum'>Registration No.</label><br/>
        <input type='number' id='regNum' required value={regNum} name='regNum' placeholder='Registration no.' onChange={(e)=>{setRegNum(e.target.value )}} autoComplete='off'/><br/>
        <button type='submit' name='submit' onChange={handleSubmit}>Submit</button>
        </form>
        </div>

        </section>


    )
}