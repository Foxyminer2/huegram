import HueObject from '../HueObject';
import './styles.css';
import { useState } from 'react';
interface Props {
  hues: HueObject[];
}


const Profile = ({hues}: Props) => {
  const newHues = hues.filter((hue) => hue.username === "@Austin_Applegate");
  const [likes]= useState(0);
  const likeypoos = newHues.map((hue)=> (hue.isLiked ? likes + 1 : likes));
  const jynx = likeypoos.reduce((acc, curr) => acc + curr, 0);


  return (
    <div className='bg-gradient-to-b from-indigo-400 to-purple-300 top-32 right-0 bottom-1 mb-72 rounded-b-xl flex flex-col p-4 items-center text-black w-1/5'>


        <div className="palette">
          {newHues.map((hue) => (
            <div
              className="color"
              style={{ backgroundColor: hue.color }}
            ></div>
          ))}
        </div>

        <h1 className="text-2xl font-bold">@Austin_Applegate</h1>

        <div className="text-center mt-6">
          <p className="font-semibold text-4xl">Likes:</p>
          <p className="text-3xl mb-4">{jynx}</p>
        </div>

        <div className="text-center">
          <p className="font-semibold text-4xl">Hues:</p>
          <p className="text-3xl pb-2 mb-4">{newHues.length}</p>
        </div>

    </div>
  );
}

export default Profile;