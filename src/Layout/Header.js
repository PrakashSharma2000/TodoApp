import React from 'react'
import {Link} from 'react-router-dom';
function Header() {
    return (
        <div>
            <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={{color:'#fff'}} to="/">Home</Link> | <Link to="/about" style={{color:'#fff'}}>About</Link>
            </header>
        </div>
    )
}

const headerStyle = {
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding:'10px'
}

export default Header;