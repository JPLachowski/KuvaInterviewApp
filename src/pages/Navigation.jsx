import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom"

const Navigation = () => {
  return (
  <Router>
    <Link to="/" className="navigation"> Home </Link>
    <Link to="/" className="navigation"> Camera </Link>
    <Link to="/" className="navigation"> Settings </Link>
    <Link to="/" className="navigation"> Account </Link>
    <Link to="/" className="navigation"> Locations </Link>
    <Link to="/" className="navigation"> Contact </Link>
  </Router>
  )
}

export default Navigation