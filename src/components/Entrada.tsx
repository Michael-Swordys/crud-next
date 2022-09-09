interface EntradaProps
{
    texto: string
    tipo?: 'text' | 'number'
    SomenteLeitura?: boolean
    valor: any
    className?: string
    valorMudou?: (valor:any) => void
}

export default function Entrada(props: EntradaProps)
{
    return(
        <div className={`flex flex-col ${props.className}`}>
            <label className= {`mb-2`}>
                {props.texto}
            </label>
            <input
                type = {props.tipo ?? 'text'}
                value = {props.valor}
                readOnly ={props.SomenteLeitura}
                onChange = {e => props.valorMudou?.(e.target.value)}
                className = {`bg-gray-100 border border-purple-600 px-4 py-2 rounded-md focus:outline-none
                ${props.SomenteLeitura ? "": `focus:bg-white`}`}
            />
        </div>
    )
}