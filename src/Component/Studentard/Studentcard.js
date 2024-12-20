import React from 'react'
import './Studentcard.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function Studentcard({rollNo,name,city}) {
  const navigate = useNavigate();

  const studentdelete= async()=>{
        const Response=await axios.delete(`https://schoolbackend-qr3h.onrender.com/students/${rollNo}`);
        window.location.reload();
  }

  return (
    <div onClick={(e)=>{
      navigate(`/detail/${rollNo}`)
    }}>
    <div className='main-studentcard'>  
           <h4 className='student-name'>name:{name}</h4>
           <div className='inner-div'>
             <div className='student-rollNo'>rollno:{rollNo}</div> 
             <div className='student-city'>city:{city}</div>
          </div>

          <button className='delete-btn'
          onClick={(e)=>{
            e.stopPropagation();
            studentdelete();
          }}
          > Delete</button>

        <button className='edit-btn'
          onClick={(e)=>{
            e.stopPropagation();
            navigate(`/edit/${rollNo}`)
          }}
          > Edit</button>

    </div>
  </div>
  )
}

export default Studentcard