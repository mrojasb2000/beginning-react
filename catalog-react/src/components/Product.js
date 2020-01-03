import React, { Component } from 'react';

class Product extends Component {
    showPrice() {
        alert(this.props.item.price);
    }
    render() { 
        let item = this.props.item;
        return <li onClick={() => this.showPrice()}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </li>;
    }
}
 
export default Product;