import { IReactComponentChild } from "./IReact";

export interface IMetaTagsRFC extends IReactComponentChild{
    title: string,
    strech?:string
}

export interface IMenuItem extends IReactComponentChild{
    anchor: string,
    alias: string,
    dropdown?: boolean,
    icon?: any,
    active?: string
}

export interface ICard extends IReactComponentChild{
    image?:string,
    title:string,
    time?:string,
    desc?:string,
    state?:string
    color?:string,
    link?:string,
    maxWidth?:number,
    bgTop?:string,
    target?: '_blank' | '_top' |'_parent' | '_self',
    alt?:string,
    children?: React.ReactNode
    animate?:string
}

export interface ISquareImg extends IReactComponentChild{
    alt?:string,
    src?:string,
}

export interface IServiceContainer extends IReactComponentChild{
    title:string,
    desc:string,
    src?:string,
    link?:string,
    orientation?: 'left' | 'right'
}

export interface IFaqProps extends IReactComponentChild{
    title:string,
    content?:string,
    image?:string
}