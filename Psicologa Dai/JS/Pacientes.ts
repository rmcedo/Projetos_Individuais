/* nome paciente
data nascimento | idade
endereço
telefone | contato
telefone | emergencia 
ocupação
com quem mora?
realiza ou já realizou tratamento psiquiatrico?
utiliza medicação? se sim, qual? quem é o médico assistente?
qual foi ou é a duração do tratamento 
já fez terapia? se sim, o motivo e a duração?
possui histórico familiar de doençass e tratamentos psiquiatricos? se sim, qual e grau de parentesco?
HISTÓRICO DO PACIENTE : ÁREA DE OBSERVAÇÕES
*/

export class Pacientes {



    public nome: string

    public dataNascimento: string

    public idade: number

    public endereco: Array<string> //Seguir padrão: Estado -> Cidade -> Bairro -> Rua -> número -> complemento

    public telefoneContato: string

    public telefoneEmergencia: string

    public ocupacao: string

    public moradia: string // MORA COM ALGUÉM?

    private tratamentoPsi: boolean

    private medicacao: boolean

    private duracaoTratamento: string

    private terapia: boolean //Já fez ou faz terapia?

    private historicoFamiliar: boolean

    private observacoes: string //?


    constructor(

        nome: string,
        dataNascimento: string,
        idade: number,
        endereco: Array<string>,
        telefoneContato: string,
        telefoneEmergencia: string,
        ocupacao: string,
        moradia: string,
        tratamentoPsi: boolean,
        medicacao: boolean,
        duracaoTratamento: string,
        terapia: boolean,
        historicoFamiliar: boolean,
        observacoes: string) {

        this.nome = nome,

            this.dataNascimento = dataNascimento,

            this.idade = idade,

            this.endereco = endereco,

            this.telefoneContato = telefoneContato,

            this.telefoneEmergencia = telefoneEmergencia,

            this.ocupacao = ocupacao,

            this.moradia = moradia,

            this.tratamentoPsi = tratamentoPsi, //private boolean

            this.medicacao = medicacao, //private boolean

            this.duracaoTratamento = duracaoTratamento, //private string

            this.terapia = terapia //private boolean - fez ou realiza terapia?

            this.historicoFamiliar = historicoFamiliar, //private boolean

            this.observacoes = observacoes //private string

    }


    public get getTratamentoPsi(): boolean {
        return this.tratamentoPsi
    }
    public set setTratamentoPsi(tratamentoPsi: boolean) {
        this.tratamentoPsi = tratamentoPsi
    }
    public get getMedicacao(): boolean {
        return this.medicacao
    }
    public set setMedicacao(medicacao: boolean) {
        this.medicacao = medicacao
    }
    public get getDuracaoTratamento(): string {
        return this.duracaoTratamento
    }
    public set setDuracaoTratamento(duracaoTratamento: string) {
        this.duracaoTratamento = duracaoTratamento
    }

    public get getTerapia(): boolean {
        return this.terapia
    }

    public set setTerapia(terapia: boolean) {
        this.terapia = terapia;
    }

    public get getHistoricoFamiliar(): boolean {
        return this.historicoFamiliar
    }
    public set setHistoricoFamiliar(historicoFamiliar: boolean) {
        this.historicoFamiliar = historicoFamiliar
    }

    public get getObservacoes(): string {
        return this.observacoes
    }

    public set setObservacoes(observacoes: string) {
        this.observacoes = observacoes;
    }






}