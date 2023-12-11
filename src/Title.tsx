import { useState } from "react";


interface Props { 
  searchHues: (color: string) => void;
}

const Title = ({searchHues}:Props) => {
  const [colors, setColors] = useState("");


  return (
    <div className="flex justify-between items-center py-8 shadow-xl px-6 bg-slate-800 shadow-r-3xl">
      <div className='w-96 font-thin italic'>
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
      <input
        type="text"
        placeholder="Search..."
        className="rounded-lg p-2 w-1/4 -mr-20 text-slate-800"
        style={{ maxWidth: '300px' }} 
        onChange={(e) => setColors(e.target.value)} />
        <a 
        href="#"
        onClick={()=> searchHues(colors)}
        className="bg-white -ml-80 rounded-r-xl p-2 border-black border-2 text-slate-800">Search?</a>

    </div>
  )
}

export default Title;
