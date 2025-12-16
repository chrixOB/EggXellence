// src/componets/pages/AirtleTigo.jsx
import React from 'react';
// import '../Style/airteltigo.css';

const Stats = () => {
  return (
    // <div className="bg-[#f1f5f9] mx-auto text-left h-5/6 rounded-lg p-4 mt-3.5 max-w-120">
    //   <div className="text-xl md:text-2xl font-bold text-center">Stat</div>
    //   <div className=" mt-5 mb-5 text-center text-xl md:text-2xl">₵3.90 – ₵210.00</div>


    //   <div className='bg-white p-3 m-3'>
    //       <label className='text-[#1e293b] font-bold'>Packages</label><br></br>
    //       <select className="border-1 border-gray-600 mt-1.5 mb-7 w-full p-1.5">
    //         <option>Choose an option</option>
    //         <option>₵3.90 - 300MB</option>
    //         <option>₵10.00 - 1GB</option>
    //         <option>₵20.00 - 2.5GB</option>
    //         {/* Add more as needed */}
    //       </select>
    //       <br></br>

    //       <label className='text-[#1e293b] font-bold'>Stat Quantity</label><br></br>
    //       <input className="border-1 border-gray-600 mt-1 w-full p-1.5" type="number" min="1" placeholder="Enter quantity" />

    //       <br></br>
    //       <button className="bg-blue-700 text-white font-bold mt-5 mb-5 p-3.5 
    //       rounded-4xl cursor-pointer w-full">Add to Cart</button>

    //       <div className="meta-info text-gray-600">
    //         <p>WirelexTech: <span className='text-black'>Stat-Data</span></p>
    //         <p>Category: <span className='text-black'>Stat</span></p>
    //       </div>
    //   </div>
      
    // </div>
    <>
      <h1 className='mb-5 mt-5 text-center font-bold text-2xl'>Quick Overview of Farm Stats </h1>
    <div className='grid gap-5 lg:grid-cols-3'>
    <div className="w-full h-16 text-2xl bg-amber-200 text-black text-center">Egg production</div>
    <div className="w-full h-16 text-2xl bg-amber-200 text-black text-center">Feed consumption</div>
    <div className="w-full h-16 text-2xl bg-amber-200 text-black text-center">Production rate</div>
    <div className="w-full h-16 text-2xl bg-amber-200 text-black text-center">Feed price index</div>
    </div>
    </>
    
  );
};

export default Stats;
