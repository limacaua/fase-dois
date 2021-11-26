export class Pessoa{
    constructor(
        public nome:string,
        public profissão: string,
        public cpf: string,
        public email: string,
        public nascimento: Date,
        public celular: number,
        public cep: number,
        
    ){
        this.nome=nome;
        this.profissão=profissão;
        this.cpf=cpf;
        this.email=email;
        this.nascimento=nascimento; 
        this.celular=celular;
        this.cep=cep;      

    }

}