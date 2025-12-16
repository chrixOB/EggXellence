import React from 'react';
import {GiChicken} from 'react-icons/gi';
import { Link } from 'react-router-dom';

 
const Dashboard = () => {

  const currentDate = new Date()
  const dateString = currentDate.toLocaleDateString()
  
  return (
    <div className="bg-[#f1f5f9] min-h-screen pt-6 md:pt-4 md:pl-7 lg:pl-7 
   sm:ml-0 sm:pl-3.5">


      <div className="flex justify-between">
      <h1 className="text-2xl font-extrabold text-blue-700 pl-2.5">Welcome, <span className='text-black'>User</span></h1>
      <h1 className='text-2xl font-extrabold lg:pr-2.5 md:pr-2.5 sm:pr-2.5'>{dateString}</h1>
      </div>

      <div className="grid gap-5 
  grid-cols-1        
  sm:grid-cols-1     
  md:grid-cols-2 
  lg:grid-cols-3
  p-3">

  <div className="bg-white h-50 p-3.5 rounded-lg shadow-2xl hover:-translate-y-2 transition duration-200 cursor-pointer">
    <p className="mt-1 text-xl">Active Birds</p>
    <h2 className="mt-1 mb-3.5 font-bold text-2xl">585</h2>
    <div className="w-full flex justify-around h-20 text-center ">
      <div className='bg-amber-200 p-2 w-[8.5rem] font-medium  rounded-2xl'>White <span className='ml-2'>85</span>
        <div className="flex justify-center mt-2 text-white"><GiChicken size={30}/></div>
      </div>
      <div className='bg-amber-200 p-2 w-[8.5rem] font-medium  rounded-2xl'>Brown <span className='ml-2'>500</span>
        <div className="flex justify-center mt-2 "><GiChicken size={30}/></div>
      </div>

    </div>
    
  </div>
  
  <div className="bg-white h-50 p-3.5 rounded-lg shadow-2xl hover:-translate-y-2 transition duration-200 cursor-pointer">
    <p className="mt-1 text-xl">Today's Production</p>
    <h2 className="mt-1 mb-3.5 font-bold text-2xl">0</h2>
  </div>


  <div className="bg-white h-50 p-3.5 rounded-lg shadow-2xl hover:-translate-y-2 transition duration-200 cursor-pointer">
    <p className="mt-1 text-xl">Total Orders</p>
    <h2 className="mt-1 mb-3.5 font-bold text-2xl">0</h2>
  </div>

  <div className="bg-white h-50 p-3.5 rounded-lg shadow-2xl hover:-translate-y-2 transition duration-200 cursor-pointer">
    <p className="mt-1 text-xl">Debtors Account</p>
    <h2 className="mt-1 mb-3.5 font-bold text-2xl">₵0.00</h2>

    <Link to="/Debtors">
    <button className='bg-blue-700 cursor-pointer text-white rounded-2xl mt-9
    font-bold p-3.5'>View Debtors</button>
    </Link>
    
  </div>

</div> 

    </div>
  );
};


export default Dashboard;
