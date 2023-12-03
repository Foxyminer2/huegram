// import React from 'react'
import Hue from './Hue'
import PostHue from './PostHue'

interface HueObject {
    hex_code: string,
    username: string,
    likes: number
}
interface Props {
    hues: HueObject[],
    addHue: (hex_code:string) => void
}

const Main = (props : Props) => {
  return (
    <div className='mt-8 flex flex-wrap w-full justify-start gap-8 overflow-y-auto  '>
      <div className='bg-slate-800 w-96 font-thin italic'>
        <span className='text-white text-5xl '>H</span>
        <span className='text-blue-500 text-5xl flexbox align-middle px-2'>*</span>
        <span className='text-white text-5xl'>U</span>
        <span className='text-purple-500 text-5xl flexbox align-middle px-2'>*</span>
        <span className='text-white text-5xl'>E</span>
        <span className='text-red-500 text-5xl flexbox align-middle px-2'>*</span>
        <span className='text-white text-5xl'>G</span>
        <span className='text-green-500 text-5xl flexbox align-middle px-2'>*</span>
        <span className='text-white text-5xl'>R</span>
        <span className='text-teal-500 text-5xl flexbox align-middle px-2'>*</span>
        <span className='text-white text-5xl'>A</span>
        <span className='text-yellow-500 text-5xl flexbox align-middle px-2'>*</span>
        <span className='text-white text-5xl'>M</span>
        </div>
        <PostHue addHue={props.addHue}/>


        {props.hues.map(  (hue) => ( 
            
            <Hue hue={hue}/>
       ))}

        

    </div>
  )
}

export default Main