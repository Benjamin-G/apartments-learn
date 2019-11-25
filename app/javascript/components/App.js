import React from "react"
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap'

class App extends React.Component {
  render () {
      const {
            logged_in,
            sign_in_route,
            sign_out_route
        } = this.props

    return (
      <>
        <Jumbotron>
            <h1>Apartments</h1>
        </Jumbotron>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">About</a>
            </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
        <Nav>
             {logged_in && <NavItem>
               <NavLink href="#">You can see this since you are logged in</NavLink>
             </NavItem> }
             {!logged_in && <NavItem>
               <NavLink disabled href="#">You can see this since you are NOT logged in</NavLink>
             </NavItem>}
         </Nav>
        {logged_in &&
          <div className="lead">
            <a color="primary" href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div className="lead">
            <a color="primary" href={sign_in_route}>Sign In</a>
          </div>
        }
      </>
    );
  }
}

export default App
