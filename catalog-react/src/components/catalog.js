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

    select(productCode) {
        let productList = this.state.products.map(function(p){
            if (p.code === productCode) {
                p.selected = (!p.selected);
            }
            return p;
        });
        this.setState({products: productList});
    }

    render() { 
       return <div>
           <h2>Wine Catalog</h2>
           <div className="ProductList">
             <ProductList items={this.state.products} selectHandler={this.select.bind(this)}/>
           </div>
       </div>
    }
}
 
export default Catalog;