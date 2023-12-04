// import React from "react";

interface HueObject {
  hex_code: string;
  username: string;
  likes: number;
}

interface Props {
  hue: HueObject;
}

const Hue = (props: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center"
      style={{ backgroundColor: props.hue.hex_code }}
    >
      <div className="bg-black mt-2 text-white flex w-auto p-2 text-center justify-center py-4 rounded-full">
        <p className="text-xl">{props.hue.hex_code}</p>
      </div>
      {/* <p className="text-white text-2xl opacity-80">{props.hue.hex_code}</p> */}
      <div className="flex flex-wrap w-16 px-10 py-2 rounded-full bg-white">
        <span className="text-5xl -ml-7">20</span>
        <span className=" text-lg -mt-1 -ml-6">Likes!</span>
      </div>
      

      <div className="bg-black text-white flex w-full text-center justify-between p-2 rounded-b-2xl">
        <button id="Like" className="text-4xl bg-green-200 p-1 rounded-full w-12">❤️</button>
        <p className="text-xl m-2">{props.hue.username}</p>
        <button id="Dislike" className="text-4xl bg-red-400 p-1 rounded-full w-12  ">X</button>
      </div>
    </div>
    
  );
  
};



export default Hue;
