import React, { Component } from 'react';
import ProductList from './ProductList';
import './Catalog.css'

class catalog extends Component {
    render() { 
       return <div>
           <h2>Catalog</h2>
           <ProductList />
       </div>
    }
}
 
export default catalog;