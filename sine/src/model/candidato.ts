export class Candidato {
    public nome: string = "";
    public email: string = "";
    public senha: string = "";
    public $key;
    public key;
    public numeroIdentificacao: string = "";
    public nomeMae: string = "";
    public apelido: string = "";
    public sexo: string = "";
    public raca: string = "";
    public dataNascimento:string ="";
    public estadoCivil: string = "";
    public nacionalidade: string = "";
    public naturalidade: string = "";
    public ufNaturalidade: string = "";
    public naturalizado:string ="";
    public portadorDeficiencia:string="";
    public deficiencia:string="";
    public descricaoDeficiencia:string="";
    public logradouro:string="";
    public complemento:string="";
    public numero:string="";
    public bairro:string="";
    public cep:string="";
    public escolaridade:string="";
    public estudante:string="";
    public cursoTecnico = [{nome:''}];
    public cursoSuperior = [{nome:''}];
    public posGraduacao = [{nome:''}];
    public idiomas = [{nome:''}];
    public habilidades = [{nome:''}];
    public certificacoes = [{ nome: '' }];
    public experiencias = [{ cargo: '', fontedenIformacao: '', menorAprendiz:'' }];
    public municipio:string="";
    public ufMoradia:string="";
    public zonaMoradia: string = "";
    public referencia: string = "";
    public emailProfissional: string = "";
    public primeiroTelefone: string = "";    
    public segundoTelefone: string = "";    
    public carteiraIdentidade: string = "";
    public orgaoEmissorIdentidade:string = "";
    public cpf: string = "";
    public carteiraTrabalhoPrevidencia: string = "";
    public papelFamilia:string ="";
    public rendaPropria:string = "";
    public rendaFamiliar:string = "";
    public numeroMembros:string ="";
    public numeroMembrosTrabalhando : string = "";
    public habilitado: string = "";
    public tempoHabilitacao: string = "";
    public veiculo: string= "";
    public tipoVeiculo: string = "";
    public disponivelViagem: string ="";
    public disponivelMorarLocalTrabalho: string = "";
    public disponivelAusentar: string ="";
    public condicaoCandidato: string = "";
    public programaGovernoParticipa: string = "";
    public riscoDesemprego: string = "";
    public economiaSolidaria: string = "";
    public bolsaFamilia: string = "";
    public gestorPoliticaPublica: string="";
    public cargoAtuacao: String="";

    constructor() {

    }
}