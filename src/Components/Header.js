import React from "react";
import { Link } from "react-router-dom";

// Search Components
import Search from "./Search";

// Images
import Logo from '../images/Logo.svg';
import menuIcon from '../images/menuIcon.png'


const Header = ({ searchTerm, setSearchTerm, movie }) => (
  <>
    <header className="bg-gradient-to-r from-slate-900 to-[#010118] text-white py-4 px-6 shadow-xl">
      <div className="max-w-6xl m-auto flex flex-wrap justify-between items-center gap-6">
        <Link to={`/`}>
          <div className="w-40">
            <span className="text-sm">Powered By</span>
            <img src={Logo} alt="" />
          </div>
        </Link>



        {movie &&
          <div className="flex justify-center items-center gap-2">
            <Link to={'/'}>
              <p className="text-blue-500 cursor-pointer">Home</p>
            </Link>
            <span>|</span>
            <p className="font-semibold text-sm uppercase">{movie.original_title}</p>
          </div>
        }

        <div className="flex justify-start items-center gap-2 bg-slate-900 px-3 py-1 rounded shadow-xl cursor-pointer">
          <p>Menu</p>
          <img src={menuIcon} className='w-5' />
        </div>

      </div>

      <div className="max-w-6xl m-auto mt-3">
        {!movie && <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />}
      </div>
    </header>
  </>
)

export default Header;