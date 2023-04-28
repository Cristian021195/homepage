import { IReactComponentChild } from '@/interfaces'
import React from 'react'

export const NoHome = ({children}:IReactComponentChild) => {
  return (
    <section id='main-section' className='row no-home'>
        {children}
    </section>
  )
}
