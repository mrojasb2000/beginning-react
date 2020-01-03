import React, { Component } from 'react';
import Product from './Product';
import './ProductList.css'


class ProductList extends Component {
   
   
    render() { 
        let productComponents = [];

        for (let product of this.props.items){
            productComponents.push(<Product item={product}/>);
        }

        return <ul>{productComponents}</ul>;
    }
}
 
export default ProductList;