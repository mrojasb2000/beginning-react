import React, { Component } from 'react';
import Product from './Product';
import './ProductList.css'


class ProductList extends Component {
    constructor() {
        super();
        this.state = { products: [] };

        fetch("products.json")
        .then(response => response.json())
        .then(json => {this.setState({products: json})})
        .catch(error => console.log(error));
    }
   
    render() { 
        let productComponents = [];

        for (let product of this.state.products){
            productComponents.push(<Product item={product}/>);
        }

        return <ul>{productComponents}</ul>;
    }
}
 
export default ProductList;