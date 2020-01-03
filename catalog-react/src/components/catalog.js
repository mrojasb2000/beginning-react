import React, { Component } from 'react';
import './Catalog.css'

class catalog extends Component {
    render() { 
        let title = "The Catalog of day " + new Date().toDateString();
        let output = <div><h2>{title}</h2></div>; 
        let message;
        let today = new Date().getDay();
      
        if (today == 0) {
            message = <div className="sorry">We are closed on Sunday...</div>;
        } else {
            message = <div className="happy">How can we help you?</div>;
        }
        return message
    }
}
 
export default catalog;