import { ICard } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

export const HorizontalCard = ({title='Proyecto',link='/', desc='Descripcion de proyecto', state,maxWidth = 300, target='_self', time='',bgTop='ECEFF1', image='https://picsum.photos/300/200'}:ICard) => {
    return (
        <article className='b-shadow h-card br-1 br-white'>
            <div>
                <Image src={image} alt="title" width={120} height={120} className='p-3' style={{ borderRadius: '1em 1em 0 0', objectFit: 'fill' }} />
            </div>
            <div>
                <h3>{title}</h3>
                <p className='my-3'>{desc}</p>
                <a href={link} target='_blank' className='btn p-1 bg-dark-2'>Repository</a>
            </div>
        </article>
    )
}
