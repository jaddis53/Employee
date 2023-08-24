// import {data} from '../data.js';
import {useState,useEffect} from 'react';
import axios from 'axios'

export const AllEmployees=()=>{
    
   
//    const [allEmployees,setAllEmployees]=useState({});
   const [search,setSearch]=useState("");
   const [data,setData]=useState([ ]);
   const [error,setError]=useState({})

   useEffect(()=>{ 
    getInstructor();

   },[])
   
async function getInstructor(){
    await axios.get('http://localhost:8081/instructor')
    .then((response)=>{setData(response.data)})
    .catch((err)=>{
        if(err){console.log(err)}
    })

}
  
  
//    const handleChange=(e)=>{
//    const {name,value}=e.target;
//    setAllEmployees((prev)=>{
//     return {
//         ...prev,
//         [name]:value
//     } 
//    })}
   console.log(search)

    return(
        <section>
            <div className="">
                <br/><br/><br/>
                <div>constainsicon Employee</div>
                <div>Employee/All Employee</div>
                <span>Employee n Total</span>
                {/* <button onChange={handleChange} value={allEmployees.filter} name="filter">Filter</button> */}
                <form>
                    <input type="text" placeholder="Search Employees" onChange={(e)=>{setSearch(e.target.value)}} name="search" value={search}/>
                </form>
                <table>
                    <thead>

                        <tr>
                            <th>RegNo.</th>
                            <th>eName</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                        {data.filter((item)=>{
                            return search.toLowerCase() === ''? item: 
                            item.first_name.toLowerCase().includes(search);

                        })
                        .map((item)=>(
                            <tr key={item.first_name}>
                                <td>{item.salary}</td>
                                <td>{item.first_name}  {item.middle_name} {item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.employee_type}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
        </section>
    )
}