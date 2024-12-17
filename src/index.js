import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import Detail from './views/Details/Detail';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Addstudent from './views/AddStudents/Addstudent';
import Update from './views/UpdateStudent/Update.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
 
const router = createBrowserRouter([
    {
     path:"/",
     element:<Home />
},
{
    path:"/detail/:rollNo",
    element:<Detail />
},
{
    path:"/edit/:rollNo",
    element:<Update />
},
{
     path:"/addstudent",
     element:<Addstudent/>
}
])

root.render(<RouterProvider router={router}/>);


