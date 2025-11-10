// src/componets/pages/AirtleTigo.jsx
import React from 'react';
// import '../Style/airteltigo.css';

const Events = () => {
  return (
    <>
      <h1 className='mb-5 mt-5 text-center font-bold text-2xl'>Quick Overview of Farm Stats </h1>
    <div className='grid gap-5 lg:grid-cols-3'>
    <div className="w-full h-16 text-2xl bg-purple-400 text-white text-center">Debeaking</div>
    <div className="w-full h-16 text-2xl bg-purple-400 text-white text-center">Vaccination</div>
    <div className="w-full h-16 text-2xl bg-purple-400 text-white text-center">Culling</div>
    <div className="w-full h-16 text-2xl bg-purple-400 text-white text-center">Saw dust Change</div>
    </div>
    </>
  );
};

export default Events;
