import React from "react";

const Actors = ({ name, character, imageUrl }) => {
  return (
    <div className="bg-slate-900 rounded-md shadow-2xl">
      <img src={imageUrl} className='rounded-tr-md rounded-tl-md' alt="" />
      <h4 className="text-white text-center font-semibold pt-2">{name}</h4>
      <p className="text-xs font-extralight text-white text-center pb-2">{character}</p>
    </div>
  )
}

export default Actors;