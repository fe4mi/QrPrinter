import React from 'react'
import { fetchProduct } from '@/lib/data'
const ProductPage = async () => {
    const products  = await fetchProduct();
  return (
    <div>
       <table>
      {products?.map((product)=>(
          <tr key={product.id}>
            <td>{product.category}</td>
            <td>{product.marke}</td>
             <td>{product.model}</td>
             <td>${product.price}</td>
             <td>{product.color}</td>
             <td>{product.milage}</td>
          </tr>



      
      
      ))}
    </table>
    </div>
  )
}

export default ProductPage
