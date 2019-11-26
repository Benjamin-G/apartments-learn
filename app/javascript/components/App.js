import React from "react"
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap'

import Header from '../reactcomponents/Header'

class App extends React.Component {
  render () {
      const {
            logged_in,
            sign_in_route,
            sign_out_route,
            current_user_id
        } = this.props
    return (
      <>
        <Header/>
        <Router>
        <Router/>
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
