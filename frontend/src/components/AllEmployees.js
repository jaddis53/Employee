import {data} from '../data.js';
import {useState,useEffect} from 'react';

export const AllEmployees=()=>{
    
   
   const [allEmployees,setAllEmployees]=useState({});
   const [search,setSearch]=useState("");
//    const [data,setData]=useState('')

//    useEffect(()=>{ 
//     const fetchData=async() =>{
//         const result=await fetch('http://localhost:8081/instructor')
//         const jsonResult=result.json()
//         setData(jsonResult)
//     }
//    fetchData()

//    },[])
  
  
   allEmployees.search=""
   const handleChange=(e)=>{
   const {name,value}=e.target;
   setAllEmployees((prev)=>{
    return {
        ...prev,
        [name]:value
    } 
   })}
   console.log(allEmployees.search)

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
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.first_name}  {item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
        </section>
    )
}