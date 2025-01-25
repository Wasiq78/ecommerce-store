import React, { useContext } from 'react';
import { ProductsContext } from '../Context/ProductsContex';

function TrendingItem() {
  const { products } = useContext(ProductsContext);
  const filteredProducts = products.filter((product) => product.id > 8);

  return (
    
    <div className="flex gap-6">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="min-w-[15rem] max-w-[15rem] border-2 border-gray-300 px-4 pb-2 transition-all duration-300 ease-in hover:border-gray-700 hover:cursor-pointer"
        >
          <img src={product.img} className="w-full object-cover" alt={product.description} />
          <p className="text-lg">{product.description}</p>
          <p className="text-xl font-bold">{product.price}$</p>
        </div>
      ))}
    </div>
  );
}

export default TrendingItem;
