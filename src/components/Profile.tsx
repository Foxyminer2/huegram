// import React from 'react'
import kaylee from '/kaylee.jpg'





const Profile = () => {
  return (
    <div className='flex flex-col border-2 p-8 items-center text-white'>

        <h1 className='text-3xl p-3'>Kaylee Odom</h1>

        <div className="flex w-1/2">
            <img src={kaylee} alt="" className='rounded-full'/>
        </div>


    </div>
  )
}

export default Profile