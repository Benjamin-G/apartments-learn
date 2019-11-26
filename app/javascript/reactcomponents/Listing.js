import React from "react"
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';


const Listing = (props) => {
    const {listings} = props
    return (
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Zipcode</th>
            </tr>
          </thead>
          <tbody>
              {listings.map(({id, address, city, state, zipcode}, index) => (
                  <tr key={id}>
                      <th scope="row">{address}</th>
                      <td>{city}</td>
                      <td>{state}</td>
                      <td>{zipcode}</td>
                  </tr>
              ))}
          </tbody>
        </table>
    )
}

export default Listing
