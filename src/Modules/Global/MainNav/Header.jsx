import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div className="mainNavInrBx">
        <div className="mainNav-logoCont">
          MarketVisit
        </div>
        <div className="mainNav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


