import { IReactComponentChild } from '../../interfaces';
interface IFaqProps extends IReactComponentChild{ 
    title?:string,
    content?:string,
    image?:string
}
export const Hoverdeon = ({title, content, image='', children}:IFaqProps) => {
    return (
        <article className='i-shadow mb-4 w-100 p-3'>
                <div className="h-fold">
                    <div>
                        <p className='me-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic ipsam voluptates quibusdam libero quisquam, enim vitae repudiandae officia laboriosam consectetur velit, deleniti iste obcaecati explicabo ea veritatis asperiores. Suscipit, ex.</p>
                    </div>
                    <h4>
                        ¿Esto es una pregunta?
                    </h4>
                    <span className='pink-0'>▼</span>
                    <small></small>
                </div>
        </article>
    )//<p>{content+""}</p>
}
