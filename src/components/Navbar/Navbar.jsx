import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <section style={{ width: "100vw", position: "fixed", background: "white", padding: "20px 0" }}>
                <div style={{ width: "1120px", margin: "0 auto", display: "flex", justifyContent: "space-between" }}>
                    <Link to='/'><a style={{ fontSize: "60px", marginRight: "" }}>Home</a></Link>
                    <Link to='/blog'><a style={{ fontSize: "60px", marginRight: "" }}>Blog</a></Link>
                    <Link to='/about'><a style={{ fontSize: "60px", marginRight: "" }}>About</a></Link>
                    <Link to='/contact'><a style={{ fontSize: "60px", marginRight: "" }}>Contact</a></Link>
                </div>
            </section>
        </>
    )
}

export default Navbar