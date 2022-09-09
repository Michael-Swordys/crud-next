import Cliente from "../core/Cliente"
import { IconeDelete, IconeEdicao } from "./Icones"

interface TabelaProps {
    
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void
    clienteExcluido?: (cliente: Cliente) => void
}
export default function Tabela(props: TabelaProps)
{
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
    function RenderizacaoCabelho()
    {
        return(
            <tr>
                <th className={`text-left p-4`}>Código</th>
                <th className={`text-left p-4`}>Nome</th>
                <th className={`text-left p-4`}>Idade</th>
                {exibirAcoes ? <th className={`p-4`}>Ações</th> : false} 
            </tr>
        )
    }

    function RenderizarAcoes(cliente: Cliente)
    {
        return(
            <td className={`flex justify-center`}>
                {props.clienteSelecionado ? (<button onClick={() => props.clienteSelecionado?.(cliente)} className={`flex justify-center items-center text-green-600 p-2 m-1 rounded-full hover:bg-purple-50`}>
                    {IconeEdicao}</button>) : false}

                {props.clienteExcluido ? (<button onClick={() => props.clienteExcluido?.(cliente)} className={`flex justify-center items-center text-red-600 p-2 m-1 rounded-full hover:bg-purple-50`}>
                    {IconeDelete}</button>) : false} 
            </td>
        )
    }

    function RenderizacaoDados()
    {
        return props.clientes?.map((cliente, i) =>
        {
            return (
                <tr key={cliente.id} className ={`${i % 2 ===0 ? `bg-purple-200` : `bg-purple-100`}`}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? RenderizarAcoes(cliente) : false}
                </tr>
            )
        })
    }

    return( 
        <table className={`w-full rounded-xl overflow-hidden`}>
            <thead className={`bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100`}>
                {RenderizacaoCabelho()}
            </thead>
            <tbody>
                {RenderizacaoDados()}
            </tbody>
        </table>
    )
}