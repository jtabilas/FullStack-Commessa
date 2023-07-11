import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand">List of Commesse</Link>
            <Link className="btn btn-outline-light" type="submit" to="/addcommessa">Add Commessa</Link>
        </div>
        </nav>
    </div>
  )
}
