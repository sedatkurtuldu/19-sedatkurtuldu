import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HopiUnAuthPageCard from './HopiUnAuthPageCard'

const UnAuthPage = () => {
  return (
    <>
      <div className='flex justify-center'>
        <Link href={'#'}>
          <Image
            alt='hopislide'
            src={ "/hopislide.png"}
            width={1500}
            height={500}
            style={{objectFit: "contain"}}
          />
        </Link>
      </div>
      <div className='flex justify-around items-center text-center my-16 gap-10'>
        <HopiUnAuthPageCard iconName={1} title={'Hopi Dünyası'} description={'Yüzlerce markada kampanyalara ek tekliflerle, yüzlerce dükkandan anında alışveriş yapma ve hop diye ödeme imkanı sunan akıllı alışveriş arkadaşı.'}/>
        <HopiUnAuthPageCard iconName={2} title={'Hopinin Faydaları'} description={'Yüzlerce markada sana özel kazançlı alışveriş fırsatları ile Hopishop`ta özel ürün seçkileri ve Hopipay dijital kart ile kolay ve güvenli ödeme imkanı sunar.'}/>
        <HopiUnAuthPageCard iconName={3} title={'Tıkla Kazan'} description={'"Tıkla Kazan" kampanyaları, markaların mevcut indirim ve kampanyalarına ek, her alışverişte sepet tutarının belli oranında Paracık kazandırır.'}/>
        <HopiUnAuthPageCard iconName={4} title={'Hopi Fırsat Eklentisi'} description={'Hopi Eklentisi`ni tarayıcına yükleyerek, internette gönlünce dolaşırken yüzlerce markadaki kampanyalardan anında haberdar olabilirsin.'}/>
      </div>
      
    </>
  )
}

export default UnAuthPage