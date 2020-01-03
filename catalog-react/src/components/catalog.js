import React, { Component } from 'react';
import ProductList from './ProductList';
import './Catalog.css'

class catalog extends Component {
    render() { 
       return <div>
           <h2>Catalog</h2>
           <div className="ProductList">
             <ProductList />
           </div>
       </div>
    }
}
 
export default catalog;