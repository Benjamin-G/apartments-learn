import React from 'react'
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';

const Header = (props) => {
    const {
          logged_in,
          sign_in_route,
          sign_out_route,
          current_user_id,
          current_user_name
      } = props
    return (

    <>
        <Jumbotron className="noMargin">
            <h1 className="title">Apartmints</h1>
        </Jumbotron>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                {logged_in ? `Welcome ${current_user_name}` : 'Sign In to Add Apartments'}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <div className="lead">
                      <NavLink to="/listings" tag={Link}>Listings</NavLink>
                    </div>
                </li>
            <li className="nav-item">
            {logged_in &&
              <div className="lead">
                <a className="nav-link" color="primary" href={sign_out_route}>Sign Out</a>
              </div>
            }
            {!logged_in &&
              <div className="lead">
                <a className="nav-link" color="primary" href={sign_in_route}>Sign In</a>
              </div>
            }
            </li>
            </ul>
            </div>
        </nav>
    </>
    )
}

export default Header
