import React from "react";

const Grid = ({ header, children }) => {
  return (
    <section className="xl:max-w-6xl mx-auto my-10 px-6">
      <h1 className="text-gray-200 pt-10 pb-8 font-sans uppercase tracking-wider lg:text-4xl text-3xl font-bold">{header}</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 justify-center gap-x-10 gap-y-12 xl:px-0">{children}</div>
    </section>
  )
}

export default Grid;