import '../App.css';
import React, { useState } from 'react';
import { productsData } from './productsData';

const Product = ({product}) => {

    return(
        <div>
            <div className="product">
                <p>{product.nimi}</p>
                <p>{product.price}</p>
                <p>{product.desc}</p>
                <img src={product.img}></img>
            </div>
        </div>
    )
}

const Products = ({products}) => {
    return (
        <div>
            {products.map(p => <Product key={p.id} product={p}/>)}
        </div>
    )
}

export {Product, Products};
