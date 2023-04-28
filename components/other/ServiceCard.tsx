import { ICard } from '@/interfaces'
import Image from 'next/image'
import { title } from 'process'
import React from 'react'



export const ServiceCard = ({image='https://cristian021195.github.io/portfolio/img/others/mail.svg',animate='', alt='Image error!', desc='Image description error!',title='Image Title error!', children}:ICard) => {
  return (
    <article className='s-card p-4 b-shadow br-1 b-grey'>
        <div className='text-center'>
            <h2 className=''>{title}</h2>
            <Image src={image} alt='imag' width={100} height={100} className={animate + ' my-3'}/>
        </div>
        <div className=''>
            {children}
        </div>
    </article>
  )
}
