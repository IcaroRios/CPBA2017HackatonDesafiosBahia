import { Vaga } from './vaga';
export class Empresa {
    public nome:string = "";
    public CNPJ:string = "";
    public email:string = "";
    public senha: string = "";
    private $key;
    private vagas:Vaga[] = [];


    constructor(){
        
    }
}