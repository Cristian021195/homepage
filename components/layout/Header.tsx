import Image from 'next/image'
import { ActiveLink } from '../ui'
import localFont from 'next/font/local';
import { useState } from 'react';
import { MenuIcon } from '../other';
import Link from 'next/link';

const myFont = localFont({ src: '../../fonts/PTSans-Regular.woff2'}) // https://cristian021195.github.io/portfolio/img/favicon.svg

export const Header = () => {
  const [open, setOpen] = useState(false);
  return ( // className={myFont.className + ' container-fluid'}
    <>
      <header className={`${myFont.className} p-4 d-flex align-items-center`}>
          <div className='d-flex align-content-center me-5' id='top'>
              <Link href="/" legacyBehavior>
                <Image alt='Logo' src={'/logos/logo-15.svg'} priority width={36} height={36}/>
              </Link>
          </div>
          <ul className='d-none d-md-flex ms-4'>
              <li><ActiveLink alias='Home' anchor='/' active='menu'/></li>
              <li><ActiveLink alias='Services' anchor='/services' active='menu'/></li>
              <li><ActiveLink alias='Portfolio' anchor='/portfolio' active='menu'/></li>
              <li><ActiveLink alias='About Me' anchor='/about' active='menu'/></li>
              <li><ActiveLink alias='Contact' anchor='/contact' active='menu'/></li>
          </ul>
          <button className='btn d-md-none' onClick={()=>setOpen(!open)}>
            <MenuIcon width={36} height={36}/>
          </button>
      </header>
      <nav className={`${myFont.className} d-flex justify-content-center d-md-none`}>
          <ul className={open ? 'accordion-on mt-5' : 'accordion-off'}>
              <li className='fs-1 my-4'><ActiveLink alias='Home' anchor='/' active='menu'/></li>
              <li className='fs-1 my-4'><ActiveLink alias='Services' anchor='/services' active='menu'/></li>
              <li className='fs-1 my-4'><ActiveLink alias='Portfolio' anchor='/portfolio' active='menu'/></li>
              <li className='fs-1 my-4'><ActiveLink alias='About Me' anchor='/about' active='menu'/></li>
              <li className='fs-1 my-4'><ActiveLink alias='Contact' anchor='/contact' active='menu'/></li>
          </ul>
      </nav>
    </>
  )
}//<ul className={open ? 'd-block p-4' : 'd-none d-sm-flex'}>