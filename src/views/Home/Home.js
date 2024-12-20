import React, {useEffect, useState } from 'react'
import axios from 'axios'
import Studentcard from '../../Component/Studentard/Studentcard.js';
import './Home.css'
import AddIcon from './add-friend.png'

import { Link } from 'react-router-dom';

function App() {
   const [Students , Setstudent]=useState([]);
  const loadstudent = async()=>{
     const Response = await axios.get("https://schoolbackend-qr3h.onrender.com/students");
     Setstudent(Response.data.data)
  }

  useEffect(()=>{
        loadstudent();  
  },[]);

   return ( 
   <div className='Main-homepage'>
            <h1 style={{textAlign:"center"}}>Student List</h1>

      <div className='students-container'>{
        Students.map((student,i)=>{
          const {rollNo,name,city}=student   
              return(
               <Studentcard  key={i} rollNo={rollNo} name={name} city={city} />
              )
        })
      } </div>
      
      {
        Students.length === 0  && <h1>NO student found</h1>
      }

      <Link to="/addstudent">
          <img src={AddIcon} className='add-img-icon' />
      </Link>


      
    </div>
  )
}

export default App