import React, { useEffect ,useState} from 'react'
import './Details.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Detail() {
  const {rollNo}=useParams();

  const [student ,Setstudent]=useState();

  const loadstudentDetails=async()=>{
             const Response = await axios.get(`https://schoolbackend-qr3h.onrender.com/students/${rollNo}`)
             Setstudent(Response.data.data);
             
  }

  useEffect(()=>{
    loadstudentDetails(rollNo);
  },[rollNo])
  return (
    <div>
      <h1 className='header'>Student Detail</h1>
      <div className='main-student-detail'>
              <h4>Name:{student?.name}</h4>
             <h5>rollNo:{student?.rollNo}</h5>
             <h6>City:{student?.city}</h6>
      </div>
    </div>
  )
}

export default Detail