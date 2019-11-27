import React from "react"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';


const Apartment = (props) => {
    const { match } = props
    const { listings } = props
    console.log(props)
    return (
        <div>
            Portfolio component
            <p> Url params: {match.params.id}</p>
            <Link to="/apartments"> Back to Listing </Link>
        </div>
    )
}

export default Apartment
