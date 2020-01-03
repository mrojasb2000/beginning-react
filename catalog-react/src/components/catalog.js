import React, { Component } from 'react';
import ProductList from './ProductList';
import './Catalog.css'


class Catalog extends Component {
    constructor() {
        super();
        this.state = { products: [] };

        fetch("products.json")
        .then(response => response.json())
        .then(json => {this.setState({products: json})})
        .catch(error => console.log(error));
    }

    render() { 
       return <div>
           <h2>Catalog</h2>
           <div className="ProductList">
             <ProductList items={this.state.products}/>
           </div>
       </div>
    }
}
 
export default Catalog;