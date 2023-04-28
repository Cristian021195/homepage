import { ICard } from '@/interfaces'
import Image from 'next/image';
import Link from 'next/link';

export const Card = ({title='Proyecto',link='/', desc='Descripcion de proyecto', state,maxWidth = 300, target='_self', time='',bgTop='ECEFF1', image='https://picsum.photos/300/200'}:ICard) => {
  return (
    <div className='br-2 b-shadow br-white' style={{maxWidth:maxWidth}}>
        <div className="card-header">
            <Image src={image} alt={title} width={maxWidth} height={200} className='p-4' style={{borderRadius:'1em 1em 0 0', objectFit:'fill', backgroundColor:bgTop}}/>
        </div>
        <div className="card-body text-center gap-2">
            <small>{time}</small>
            <h3 className='mb-1'>{title}</h3>
            <p>{desc}</p>
        </div>
        <div className="card-stats d-flex justify-content-center">
            <Link href={link} className='btn p-2 bg-lblue-0 my-4' target={target}>
                Go to project
            </Link>
        </div>
    </div>
  )
}
