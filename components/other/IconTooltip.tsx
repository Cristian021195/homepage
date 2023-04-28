import Image from 'next/image'
import React, { useState } from 'react'

interface IProps{
    title?:string,
    img?:string,
    hover?:string
}

export const IconTooltip = ({title = "Project", img="https://cristian021195.github.io/portfolio/img/favicon.svg", hover="hithere"}:IProps) => {
  return (
    <button className="tt-c no-select" data-position="bottom">
        <Image src={img} alt="colores" width={60} className={hover} height={60}/>
        <span className="toolTip"><a href={img} target='_blank' className='white-0'>{title}</a></span>
    </button>
  )
}

/*

<a href={img} target='_blank' className="tt-c" data-position="bottom">
        <Image src={img} alt="colores" width={60} className={hover} height={60}/>
        <span className="toolTip">{title}</span>
    </a>

*/
