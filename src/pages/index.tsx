import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente,setCliente] = useState<Cliente>(Cliente.vazio())
  const clientes = [
  new Cliente("Michael", 22, "1"),
  new Cliente("Deivison", 20, "2"),
  new Cliente("DM", 22)
  ]

  function clienteSelecionado(cliente: Cliente){
     setCliente(cliente)
     setVisivel('form')
  }

  function novoCliente(){
    setCliente(Cliente.vazio())
    setVisivel('form')
 }

  function clienteExcluido(cliente: Cliente){
    console.log(`Exluir... ${cliente.nome}`)
 }

 function salvarCliente(cliente: Cliente){
  console.log(cliente)
  setVisivel('tabela')
}

  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout titulo ="Cadastro Simples">
        {visivel === 'tabela' ?(
          <>
          <div className={`flex justify-end`}>
            <Botao className={`mb-4`}
            onClick= {novoCliente}>
              Novo Cliente
            </Botao>
          </div> 
        <Tabela clientes={clientes}
        clienteSelecionado = {clienteSelecionado}
        clienteExcluido = {clienteExcluido}
        ></Tabela>
        </>
        ) :
        (
          <Formulario cliente={cliente}
          clienteMudou = {salvarCliente}
          cancelado = {() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}