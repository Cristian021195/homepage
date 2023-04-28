import Image from 'next/image'

interface IProps{
  width?:number,
  height?:number,
  alt?:string,
  src:any,
}
export const SquareImg = ({width=200,height=200,alt='Alternative photo', src='https://picsum.photos/200/300'}:IProps) => {
  return (
    <div className='br-1'>
        <Image width={width} height={height} alt={alt} src={src} style={{objectFit:'contain', borderRadius:'0.5em'}}/>
    </div>
  )
}
