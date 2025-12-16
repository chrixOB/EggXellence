// src/componets/pages/AirtleTigo.jsx
import React from 'react';
// import '../Style/feed.css';

const Feed = () => {
  return (
    <div className="bg-[#f1f5f9] mx-auto text-left h-5/6 rounded-lg p-4 mt-3.5 max-w-120">
      <div className="text-xl md:text-2xl font-bold text-center">Feed Management</div>
      
      <form action="">
      <div className='mt-4'>
        <label className='mb-3 text-[1.2rem]' htmlFor="">Select Feed Type</label>
        <select className='w-full border-2 p-3 font-semibold text-[1.3rem]' name="Select feed type">
          <option value="">Layer Mash</option>
          <option value="">Sankofa</option>
          <option value="">Starter</option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      </form>
    </div>
  );
};

export default Feed;
