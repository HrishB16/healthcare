import './Navbar.css'
import { useState } from "react"
import Dropdownmenu from './Dropdownmenu'


export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [isSubMenu, setIsSubMenu] = useState(false)

    const toggleSubmenu = ()=>{
        setIsSubMenu(!isSubMenu);
    }

    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          FreshCare
        </a>
        <button
         onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
         className="hamburger">
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path

              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/hospitals">Hospitals</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
             <Dropdownmenu />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
