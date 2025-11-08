import React from 'react'

function Cards({data}) {
    console.log(data)
  return (
    <div className='bg-white border border-gray-200 rounded-lg w-64 hover:shadow-md transition-shadow duration-300 m-4'>
      {/* Header with logo and save button */}
      <div className='p-4 flex items-center justify-between'>
        <img 
          className='w-16 h-16 object-contain rounded-lg border border-gray-200 p-1' 
          src={data.img} 
          alt="Amazon Logo"
        />
        <button className='bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1 rounded-md text-sm font-medium transition-colors'>
          Save
        </button>
      </div>

      {/* Company and time */}
      <div className='px-4'>
        <div className='flex justify-between items-center mb-1'>
          <h2 className='font-bold text-gray-800'>{data.name}</h2>
          <p className='text-gray-500 text-xs'>5 days ago</p>
        </div>

        {/* Job title */}
        <h1 className='text-lg font-semibold text-gray-900 mb-2'>{data.job}</h1> 

        {/* Tags */}
        <div className='flex gap-2 mb-3'>
          <span className='text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded'>{data.tag}</span>
          <span className='text-xs bg-green-100 text-green-700 px-2 py-1 rounded'>{data.position}</span>
        </div>

        {/* Salary and location */}
        <div className='mb-4'>
          <p className='text-sm text-gray-700 font-medium'>$150/hr</p>
          <p className='text-sm text-gray-500'>{data.location}</p>
        </div>
      </div>

      {/* Apply button */}
      <div className='px-4 pb-4'>
        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors'>
          Apply Now
        </button>
      </div>
    </div>  
  )
}

export default Cards