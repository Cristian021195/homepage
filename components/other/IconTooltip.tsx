import Image from 'next/image'
import React, { useState } from 'react'

interface IProps{
    title?:string,
    img?:string,
    hover?:string
}

export const IconTooltip = ({title = "Project", img="https://cristian021195.github.io/portfolio/img/favicon.svg", hover="hithere"}:IProps) => {
  return (
    <a href={img} target='_blank' className="tt-c" data-position="bottom">
        <Image src={img} alt="colores" width={60} className={hover} height={60}/>
        <span className="toolTip">{title}</span>
    </a>
  )
}

/*

<a href='https://cristian021195.github.io/portfolio/img/svg/horabondi.svg' target='_blank' className='tooltip-container'>
            <Image src='https://cristian021195.github.io/portfolio/img/svg/horabondi.svg' title='Horabondi' alt="colores" width={160} height={160} className='p-4' style={{borderRadius:'1em 1em 0 0', objectFit:'fill'}}/>
            <span className="tooltip">My Awesome ToolTip</span>
        </a>

*/
