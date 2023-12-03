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


      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>

      </div>
    </div>
  );
};

export default Hue;
