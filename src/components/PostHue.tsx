import React, { useState } from 'react'
// import kaylee from '/kaylee.jpg'
import Hue from './Hue'

interface Props{
    addHue: (hex_code:string)=> void
}

const PostHue = (props:Props) => {

    const[hex_code, setColor] = useState('')

  return (
    <div className='flex w-64 flex-row ml-40  rounded-lg justify-evenly pb-10 border-white border-2' style={{backgroundColor : hex_code}}>

        <div className='flex flex-col w-full p-4 gap-4 max-h-24'>
          
            <input className='bg-white pl-2 border-black border-2 rounded-lg' type="text" name="hue" id="hue" onChange={ (event) => setColor(event.target.value) } />

            <div className='bg-black rounded-full flexbox justify-center text-center my-6 text-lg p-2'>
              <a href="#" onClick={ () => props.addHue(hex_code)  } className="btn text-white ">Post</a>
            </div>
            </div>

        {/* <Hue hue={ {hex_code, username:"kaylee", likes:3}} /> */}

    </div>
  )
}

export default PostHue