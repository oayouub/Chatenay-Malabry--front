import { UserAddIcon } from "@heroicons/react/outline"
import React from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="bg-primary h-[64px] flex flex-col justify-center items-end flex-shrink-0">
      <div className="flex justify-between items-center self-stretch  m-8">
        <div className="flex gap-6 w-80 p-4 color text-white items-center">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <Link to="/" className="flex items-start">
            Dashboard
          </Link>
        </div>
        <Link to="/form">
          <div className="flex items-center transition-all text-white border white rounded-lg px-3 py-2 gap-4 hover:bg-white hover:text-primary">
            <button>Ajouter un professionnel</button>
            <UserAddIcon className="h-5 w-5 cursor-pointer "/>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
