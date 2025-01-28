import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsContext } from '../Context/ProductsContex';

function ProductDetails() {

    const {productId} = useParams();
    const {products} = useContext(ProductsContext);
    const [foundProduct, setFoundProduct] = useState(null);

    useEffect(()=> {
         const item = products.find((product) => product.id.toString() === productId)
         setFoundProduct(item);
    },[productId, productId])

    if(!foundProduct){
        return <div>No Products to Show.</div>
    }

  return (
    <div className='mt-40'>
        <div className='container'>
            <div>
                <h2>{foundProduct.description}</h2>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails