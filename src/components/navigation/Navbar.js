import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/">
                <img src="https://avatars.githubusercontent.com/u/64151210?v=4" width="80"/>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mx-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/pokemon">Pokemon</Link>
                <Link className="nav-link" to="items">Items</Link>
                <a className="nav-link disabled">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default Navbar
