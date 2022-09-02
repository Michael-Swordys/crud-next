import Botao from '../components/Botao'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
  const clientes = [
  new Cliente("Michael", 22, "1"),
  new Cliente("Deivison", 20, "2"),
  new Cliente("DM", 22, "3")
  ]

  function clienteSelecionado(cliente: Cliente){
     console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Exluir... ${cliente.nome}`)
 }

  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500 text-white`}>
      <Layout titulo ="Cadastro Simples">
        <div className={`flex justify-end`}>
          <Botao className={`mb-4`}>Novo Cliente</Botao>
        </div> 
      <Tabela clientes={clientes}
      clienteSelecionado = {clienteSelecionado}
      clienteExcluido = {clienteExcluido}
      ></Tabela>
      </Layout>
    </div>
  )
}