import Menu from './components/Menu'
import Main from './components/Main'
import Profile from './components/Profile'
import axios from 'axios'
import { useEffect, useState } from 'react'


interface Hues {
  hex_code: string;
  username: string;
  id:number;
  likes: number;
  
}

function App() {

  useEffect(() => {
    axios 
      .get<Hues[]>("https://greenegunnar.pythonanywhere.com/api/hues/")
      .then((result)=> setHues(result.data));
  },[]);

  const [hues, setHues] = useState<Hues[]>([
    
  ]);

  

  const addNewHue = (hex_code:string ) => 
  {
      console.log(hex_code)
      const newHue = {hex_code, username: "kaylee", id: hues[hues.length-1].id+1 , likes:0};
      setHues( [newHue, ...hues ] );
  }

  

  return (
    
    <div className='flex bg-slate-800 h-screen'>

      <Menu />

      <Main hues={hues} addHue= {addNewHue} />

      <Profile />
    </div>
  )
}

export default App
