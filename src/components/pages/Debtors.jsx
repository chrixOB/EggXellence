import React from 'react'

function Debtors() {
  return (

    <div className="bg-[#f1f5f9] min-h-screen pt-6 md:pt-4 md:pl-7 lg:pl-7 sm:ml-0 sm:pl-3.5">
        <div className='font-bold text-5xl text-center'>My Debtors</div>

    <div className='grid grid-cols-5 mt-8 gap-3.5 border-2 mr-5 text-center'>
        <div className='font-black text-shadow-yellow-700 text-2xl'>Customer Name</div>
        <div className='font-black text-shadow-yellow-700 text-2xl'>Amount (₵)</div>
        <div className='font-black text-shadow-yellow-700 text-2xl'>Due Date</div>
        <div className='font-black text-shadow-yellow-700 text-2xl'>Status</div>
        <div></div>

        <div className='text-xl'>Chris</div>
        <div className='text-xl'>485</div>
        <div className='text-xl'>29/11/25</div>
        <div className='text-lg'>
            <button className='bg-green-500 text-white font-semibold w-20 p-1 rounded-2xl '>paid</button>
        </div>
        <div className='text-lg'>
            <button className='bg-amber-400 cursor-pointer text-white font-semibold w-20 p-1 rounded-2xl '>clear</button>
        </div>

        <div className='text-xl'>Jack</div>
        <div className='text-xl'>1200</div>
        <div className='text-xl'>30/11/25</div>
        <div className='text-lg'>
            <button className='bg-red-500 text-white font-semibold w-20 p-1 rounded-2xl '>overdue</button>
        </div>
        <div className='text-lg'>
            <button className='bg-amber-200 text-white font-semibold w-20 p-1 rounded-2xl '>clear</button>
        </div>

        <div className='text-xl'>William</div>
        <div className='text-xl'>250</div>
        <div className='text-xl'>2/12/25</div>
        <div className='text-lg'>
            <button className='bg-blue-500 text-white font-semibold w-20 p-1 rounded-2xl'>pending</button>
        </div>
        <div className='text-lg'>
            <button className='bg-amber-200 text-white font-semibold w-20 p-1 rounded-2xl '>clear</button>
        </div>
    </div>
    </div>
  )
}

export default Debtors