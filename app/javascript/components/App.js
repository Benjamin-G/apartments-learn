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
