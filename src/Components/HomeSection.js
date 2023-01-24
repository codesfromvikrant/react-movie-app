import React from "react";

const HomeSection = ({ image, title, text }) => {

  return (
    <section style={{
      background: `linear-gradient(45deg, rgba(0, 0, 0, 0.747), rgba(0, 0, 0, 0.047)), url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: "fixed",
      height: '70vh',
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    }} >
      <div className="text-white max-w-6xl px-6 m-auto">
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="text-gray-200 text-sm py-3 sm:w-1/2">{text}</p>
      </div>
    </section >
  )
}

export default HomeSection;