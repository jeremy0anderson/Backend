export interface NavProps{
    anchor:string
    background?:string,
    children?:JSX.Element[] | JSX.Element
    open?:boolean
    sidebarBackground?:string
    onToggle?:()=>void
}
export interface NavState{
    open:boolean
}