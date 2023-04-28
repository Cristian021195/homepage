import { IReactComponentChild } from "@/interfaces";

interface IProps extends IReactComponentChild{
    title:string
}

export function MainDesc({title='Services', children}:IProps){
    return (
      <section className='main-desc'>
        <h1 className='fs-4'>{title}</h1>
        <div>
          {children}
        </div>
      </section>
    )
  }