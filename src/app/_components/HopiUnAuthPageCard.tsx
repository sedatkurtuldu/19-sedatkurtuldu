"use client"

import Link from 'next/link';
import React from 'react'
import { TbChartBubbleFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { TbDiscount2 } from "react-icons/tb";
import { IoExtensionPuzzleSharp } from "react-icons/io5";

interface HopiUnAuthPageCardProps {
    title: string;
    description: string;
    iconName: string | number;
}

const HopiUnAuthPageCard = ({ title, iconName, description } : HopiUnAuthPageCardProps) => {
  return (
    <div className='flex flex-col items-center w-1/6'>
        {iconName == 1 ? <TbChartBubbleFilled color={'#4EABE9'} size={50} />
         : iconName == 2 ? <FaStar color={'#4EABE9'} size={50} /> 
         : iconName == 3 ? <TbDiscount2 color={'#4EABE9'} size={50} />
         : <IoExtensionPuzzleSharp color={'#4EABE9'} size={50} />
        }
        <div className='font-bold text-lg my-3'>{title}</div>
        <div className='break-normal'>
            {description}
        </div>

        <div className='border rounded-2xl bg-customGray p-1 px-2 m-4 text-sm text-white'>
            <Link href={'#'}>DAHA FAZLASINI GÖR</Link>
        </div>
    </div>
  )
}

export default HopiUnAuthPageCard