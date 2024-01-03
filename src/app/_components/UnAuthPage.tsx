import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UnAuthPage = () => {
  return (
    <div className='flex justify-center'>
      <Link href={'#'}>
        <Image
          alt='hopislide'
          src={ "/hopislide.png"}
          width={1400}
          height={500}
          style={{objectFit: "contain"}}
        />
      </Link>
    </div>
  )
}

export default UnAuthPage