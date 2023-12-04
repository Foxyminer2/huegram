// import React from 'react'
import kaylee from '/kaylee.jpg'





const Profile = () => {
  return (
    <div className='flex flex-col border-2 rounded-xl p-8 items-center text-black bg-white '>

        <h1 className='text-3xl p-3'>Kaylee Odom</h1>

        <div className="flex w-1/2">
            <img src={kaylee} alt="" className='rounded-full border-black border-4'/>
        </div>


    
    
    </div>
  )
}

export default Profile