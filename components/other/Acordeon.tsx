import Image from 'next/image';
import React, { useState } from 'react'
import { IReactComponentChild } from '../../interfaces';
interface IFaqProps extends IReactComponentChild{
    title:string,
    content?:string,
    image?:string
}
export const Acordeon = ({title, content, image='', children}:IFaqProps) => {
    const [hide, setHide] = useState<boolean>(true)
    return (
      <article className='p-3 i-shadow mb-4 w-100'>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h4>{title+""}</h4>
            </div>
            <div>
                <button onClick={()=>setHide(!hide)} className={hide ? 'btn pink-0 rotate-left' : 'btn pink-0 rotate-right'}>▼</button>
            </div>
        </div>
        <div className={hide ? 'd-none p-2' : ' p-2'}>
            {image !== '' && <Image priority src={image} alt="me" width="150" height="100" onError={()=>"/next.svg"}/>}        
            {children}
        </div>
      </article>
    )//<p>{content+""}</p>
}
