import React from "react"
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';

import Header from '../reactcomponents/Header'
import Listing from '../reactcomponents/Listing'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listings: []
        }
        this.getListings()
    }
    getListings = () => {
        fetch("/apartments")
            .then(req => req.json())
            .then(list => this.setState({listings: list}))
    }
  render () {
    const {listings} = this.state
    return (
    <>
        <Router>
            <Header{...this.props}/>
            <Route path="/listings" render = {(props) => <Listing listings = {listings} />} />
        </Router>
    </>
    );
  }
}

export default App
