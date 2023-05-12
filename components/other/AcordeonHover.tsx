import { IReactComponentChild } from '../../interfaces';
interface IFaqProps extends IReactComponentChild{ 
    title?:string,
    content?:string,
    image?:string
}
export const AcordeonHover = ({title='¿Esto es una pregunta?', content, image='', children}:IFaqProps) => {
    return (
        <article className='p-3 i-shadow mb-4 w-100'>
            <div className="hfold">
                <h4>{title}</h4> 
                <span className='pink-0'>▼</span>
                <div className="h-fold-3">
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </article>
    )//<p>{content+""}</p>
}
