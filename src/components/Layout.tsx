import Titulo from "./Titulo"

interface LayoutProps
{
    titulo: string
    children: any
}

export default function Layout(props : LayoutProps)
{
    return(
        <div className={`flex flex-col
        bg-zinc-50 text-gray-800 rounded-lg w-2/4 shadow-2xl`}>
            <Titulo>{props.titulo}</Titulo>
            <div className={`p-6`}>
                {props.children}
            </div>
        </div>
    )
}