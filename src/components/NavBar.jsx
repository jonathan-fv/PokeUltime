import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FiMenu, FiX} from 'react-icons/fi'
import "./NavBarStyle.css"



const NavBar= () => {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">PokéUltime</Link>
            </div>
            <div className={`navbar-links ${open ? "open" : ""}`}>
                <Link to="/kanto" onClick={handleClose}>Kanto</Link>
                <Link to="/johto" onClick={handleClose}>Johto</Link>
                <Link to="/hoenn" onClick={handleClose}>Hoenn</Link>
                <Link to="/sinnoh" onClick={handleClose}>Sinnoh</Link>
                <Link to="/unys" onClick={handleClose}>Unys</Link>
                <Link to="/kalos" onClick={handleClose}>Kalos</Link>
                <Link to="/alola" onClick={handleClose}>Alola</Link>
                <Link to="/galar" onClick={handleClose}>Galar</Link>
                <Link to="/paldea" onClick={handleClose}>Paldéa</Link>
            </div>
            <div className="navbar-toggle" onClick={handleToggle}>
                {open ? <FiX /> : <FiMenu />}
            </div>
        </nav>
    )
}

export default NavBar