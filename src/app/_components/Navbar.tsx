import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { getServerAuthSession } from "~/server/auth";

const Navbar = async () => {
    const session = await getServerAuthSession();
  return (
<div className="navbar bg-base-100 shadow-md">
  <div className="flex-1">
    <Link href='/'>
        <Image
            alt="Hopi"
            src={ "/hopi.jpg"}
            width={90}
            height={40}
            />
    </Link>
    <Link href='/'>
        <Image
            alt="Hopi"
            src={ "/hopishoplogo.png"}
            width={90}
            height={40}
            />
    </Link>
  </div>
  <div className="flex-none">
    <ul className="flex text-gray-400 gap-8">
        <li><Link href={'#'} className="hover:text-black hover:border-b-2 hover:border-solid hover:border-black font-bold hover:pb-7">ÜRÜNLER</Link></li>
        <li><Link href={'#'} className="hover:text-black hover:border-b-2 hover:border-solid hover:border-black font-bold hover:pb-7 font-bold">WEHOPİ</Link></li>
        <li><Link href={'#'} className="hover:text-black hover:border-b-2 hover:border-solid hover:border-black font-bold hover:pb-7 font-bold">KAMPANYALAR</Link></li>
        <li><Link href={'#'} className="hover:text-black hover:border-b-2 hover:border-solid hover:border-black font-bold hover:pb-7 font-bold">MARKALAR</Link></li>
        <li><Link href={'#'} className="hover:text-black hover:border-b-2 hover:border-solid hover:border-black font-bold hover:pb-7 font-bold">HOPİ</Link></li>
            <div className="dropdown">
            <div tabIndex={0} role="button" className="text-gray-400 rounded-box w-24">
                 <div className='flex text-gray-400 font-bold'>
                    BLOG
                     <FaChevronDown className='mt-1 ml-2' />
                  </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-18">
             <li><Link className='text-black' href={"#"}>Blog</Link></li>
            </ul>
            </div>
    </ul>

    <div className="form-control relative mr-2">
        <input type="text" placeholder="Sana nasıl yardımcı olabilirim?" className="input w-max border bg-inputCustomGray border-gray-300 pl-8 text-base rounded-3xl" />
        <CiSearch className="absolute left-3 top-4 text-gray-600" />
    </div>

    {session ? (
                <>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="border border-pink-600 text-sm bg-white-600 rounded-box w-36 py-1">
                    <div className='flex items-center justify-center text-pink-600'>
                            Merhaba
                        </div>
                        <div className='absolute ml-3 top-5 text-pink-600'>
                            <FaChevronDown />
                        </div>
                        <div className='flex items-center justify-center text-pink-600 font-bold'>
                            {session.user.name?.split(' ')[0]}
                        </div>
                        <div className='flex items-center justify-center text-pink-600'>

                            <div className='absolute top-4 right-4'>
                                <IoPersonOutline size={20} />
                            </div>
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36">
                        <li><Link className='text-black' href={"/api/auth/signout"}>Çıkış Yap</Link></li>
                    </ul>
                </div>
                </>
           
            ) : (
            <> 
            <div className="shadow menu menu-sm dropdown-content bg-pink-600 rounded-box w-36">
                    <Link
                    className='text-white'
                    href={"/api/auth/signin"}>
                        <div className='flex items-center justify-center font-bold'>
                            Giriş Yap
                        </div>
                        <div className='flex items-center justify-center'>
                            veya kayıt ol !
                        </div>
                        <div className='absolute top-8 right-3'>
                            <IoPersonOutline size={20} />
                        </div>
                    </Link>
                </div>
                
                
            </>
            )}

   
  </div>
</div>
  )
}

export default Navbar