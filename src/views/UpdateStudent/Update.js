import React, { useState , useEffect} from 'react'
import HomeIcom from './house.png'
import {Link ,useParams} from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import './Update.css'

function Addstudent() {
   
    // const [rollNo,setrollNo]=useState("");
    // const [name,setname]=useState("");
    // const [city,setcity]=useState("");

    const [student ,Setstudent]=useState({
        rollNo:"",
        name:"",
        city:""
    })
    const {rollNo}=useParams();

    const UpdatestudentDetails=async()=>{
      const Response = await axios.get(`${process.env.REACT_APP_API_URL}/students/${rollNo}`)
      Setstudent(Response.data.data);
      
}

useEffect(()=>{
  UpdatestudentDetails(rollNo);
},[rollNo])

    const UpdateStudent=async()=>{
           try{   const Response = await axios.put(`${process.env.REACT_APP_API_URL}/students/${rollNo}`,{
                // rollNo:student.rollNo,
                name:student.name,
                city:student.city,
              });
             console.log(Response?.data?.message);
             toast.success(Response?.data?.message)
             
            }
            catch(error){
              // console.log(error?.data?.message);
              toast.success(error?.data?.message)  
            }        
    }

  return (
    <div>
      <h1 className='header-addstudent'> Update Student</h1>  

      <div className='form-container'>
        <input 
             type='text' 
            placeholder='rollno' 
            className='addstudent-input'
            value={student.rollNo}
            onChange={(e)=>{ 
                Setstudent({
                    ...student,
                   rollNo: e.target.value
                })
            }}disabled
        />
        <input 
             type='name' 
             placeholder='name'
             className='addstudent-input'
             value={student.name}
             onChange={(e)=>{ 
                Setstudent({
                    ...student,
                    name:e.target.value
                })
            }}
        />
        <input 
             type='city' 
            placeholder='city'
            className='addstudent-input'
            value={student.city}
            onChange={(e)=>{ 
                Setstudent({
                    ...student,
                    city:e.target.value
                })
            }}
        />
      </div>

      <div className='add-student-btn' onClick={()=>UpdateStudent()}>Update Student</div>

      <Link to="/">
      <img src={HomeIcom} className='home-btn'/>
      </Link>
      <Toaster/>

    </div>
  )
}

export default Addstudent