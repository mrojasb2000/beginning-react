import React, { Component } from 'react';
import './Catalog.css'
class catalog extends Component {
    render() { 
        let title = "The Catalog of day " + new Date().toDateString();
        let output = <div><h2>{title}</h2></div>; 
        return output;
    }
}
 
export default catalog;