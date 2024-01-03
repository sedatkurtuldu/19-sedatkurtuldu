/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image';
import React from 'react'

import { api } from "~/trpc/server";

const Product = async () => {

 const products = await api.product.getAll.query();

  return (
    <div>
        <div className='font-bold my-10'>{products.length} Ürün</div>
        <div>
            {products.map((product) => (
                <div className='w-1/3'>
                    <Image alt={'Ürün ' + product.id} width={1000} height={50} src={product.imageUrl}/>
                    <div>
                        {product.title}
                    </div>
                    <div>
                        {product.description}
                    </div>
                    <div>
                        {product.price} TL
                    </div>
                </div>
            ))}
        </div>
       
    </div>
    
  );
};

export default Product