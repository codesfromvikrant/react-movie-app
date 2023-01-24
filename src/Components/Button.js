import React from 'react';

const Button = ({ text, setLoadMore }) => {

  function handleChange() {
    setLoadMore(true);
  }

  return (
    <div className="flex justify-center items-center">
      <button onClick={handleChange} className='text-white bg-slate-900 px-12 py-3 rounded-md my-3 shadow-2xl'>{text}</button>
    </div>
  )
}

export default Button;