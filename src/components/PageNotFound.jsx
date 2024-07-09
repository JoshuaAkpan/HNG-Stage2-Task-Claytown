import React from 'react'


const PageNotFound = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='bg-white p-8 rounded shadow-lg'>
            <h2 className='text-4xl font-bold text-gray-800'>404 - Page Not Found</h2>
            <p className='text-gray-600 mt-2'>This page you are looking for does not exist</p>
        </div>
    </div>
  )
}

export default PageNotFound