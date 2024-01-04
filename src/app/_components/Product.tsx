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
        <div className='flex font-bold my-10 ml-16'>{products.length} Ürün</div>
        <div className='flex justify-center gap-5'>
            {products.map((product, index) => (
                <div key={index}>
                    <div className='w-80'>
                     <Image className='object-contain' alt={`Ürün ${index + 1}`} width={480} height={60} src={product.imageUrl}/>
                    </div>
                    <div className='mt-6 mb-6'>
                        <div className='font-bold'>
                            {product.title}
                        </div>
                        <div>
                            {product.description}
                        </div>
                        <div className='flex justify-end mt-3 text-lg font-bold customDodgerBlue'>
                            {product.price} TL
                        </div>
                    </div>

                    
                </div>
            ))}
        </div>
       
    </div>
    
  );
};

export default Product