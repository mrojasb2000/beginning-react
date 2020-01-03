import React, { Component } from 'react';

class Product extends Component {
    
    render() { 
        let item = this.props.item;
        return <li>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </li>;
    }
}
 
export default Product;