export default class Cliente
{
    #id: string
    #nome: string
    #idade: number

    constructor(nome: string, idade: number, id:string = null)
    {
        this.#id = id,
        this.#idade = idade
        this.#nome = nome
    }

    static vazio()
    {
        return new Cliente('' , 0)
    }
    
    get nome()
    {
        return this.#nome
    }

    get id()
    {
        return this.#id
    }

    get idade()
    {
        return this.#idade
    }
} 