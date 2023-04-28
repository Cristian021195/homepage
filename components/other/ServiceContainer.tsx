import { IServiceContainer } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'

export const ServiceContainer = ({title = "Servicio", desc = "Descripcion del servicio", orientation = 'left', src='https://picsum.photos/200', link='/'}:IServiceContainer) => {
    
    if(orientation === 'left'){
        return (
            <div  className='my-2 b-shadow br-1 p-3' style={{border:'solid 1px whitesmoke'}}>
            <section className='service-card'>
                <article className='col-md-0'>
                    <Image alt='image' src={src} height={200} width={200}/>
                </article>
                <article className='col-md-0'>
                    <h2  className='mb-2'>{title}</h2>
                    <p className='mb-4'>{desc}</p>
                </article>
            </section>
            <p className='text-end'>
                        <Link legacyBehavior href={'/services/'+link}>
                            <a className='bg-blue-0 p-2 btn mt-4'>View More</a>
                        </Link>
            </p>
            </div>
          )
    }else{
        return (
            <div className='my-2 b-shadow br-1 p-3' style={{border:'solid 1px whitesmoke'}}>
                <section className='service-card'>
                <article className='col-md-0'>
                    <h2  className='mb-2'>{title}</h2>
                    <p className='mb-4'>{desc}</p>
                </article>   
                <article className='col-md-0'>
                    <Image alt='image' src={src} height={200} width={200}/>
                </article>
            </section>
            <p className='text-end'>
                        <Link legacyBehavior href={'/services/'+link}>
                            <a className='bg-blue-0 p-2 btn mt-4'>View More</a>
                        </Link>
                    </p>
            </div>
          )
    }
}
