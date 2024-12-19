import React, { useState } from 'react'
import "./Addstudent.css"
import HomeIcom from './house.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function Addstudent() {
   
    // const [rollNo,setrollNo]=useState("");
    // const [name,setname]=useState("");
    // const [city,setcity]=useState("");

    const [student ,Setstudent]=useState({
        rollNo:"",
        name:"",
        city:""
    })

    const addStudent=async()=>{
           try{   const Response = await axios.post("http://localhost:5005/students",{
                rollNo:student.rollNo,
                name:student.name,
                city:student.city,
              })
             Setstudent({
                rollNo:"",
                name:"",
                city:"",
             })
             if(Response?.data?.success == true){
             toast.success(Response?.data?.message)
             // alert(Response?.data?.message);
             console.log(Response);
             }else{
                console.log(Response)
                toast.error(Response?.data?.message)
             }
            }catch(error){
              
               toast.error(Response?.data?.message)
                //alert(error.message);
                
            }
              
    }

  return (
    <div>
      <h1 className='header-addstudent'>Addstudent</h1>  

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
            }}
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

      <div className='add-student-btn' onClick={()=>addStudent()}>Add Student</div>

      <Link to="/">
      <img src={HomeIcom} className='home-btn'/>
      </Link>
      <Toaster/>

    </div>
  )
}

export default Addstudent