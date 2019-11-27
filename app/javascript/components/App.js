import React from "react"
import { Jumbotron, Nav, NavItem, NavLink } from 'reactstrap'
import { BrowserRouter as  Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../reactcomponents/Header'
import Listing from '../reactcomponents/Listing'
import Apartment from '../reactcomponents/Apartment'


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
            <Switch>
            <Route path="/apartments/:id" component={(props) => <Apartment {...props} listings={listings}/>} />
            <Route path="/apartments" render = {(props) => <Listing listings = {listings} />} />
            </Switch>
        </Router>
    </>
    );
  }
}

export default App
