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
    constructor(nome, dataNascimento, idade, endereco, telefoneContato, telefoneEmergencia, ocupacao, moradia, tratamentoPsi, medicacao, duracaoTratamento, terapia, historicoFamiliar, observacoes) {
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
            this.terapia = terapia; //private boolean - fez ou realiza terapia?
        this.historicoFamiliar = historicoFamiliar, //private boolean
            this.observacoes = observacoes; //private string
    }
    get getTratamentoPsi() {
        return this.tratamentoPsi;
    }
    set setTratamentoPsi(tratamentoPsi) {
        this.tratamentoPsi = tratamentoPsi;
    }
    get getMedicacao() {
        return this.medicacao;
    }
    set setMedicacao(medicacao) {
        this.medicacao = medicacao;
    }
    get getDuracaoTratamento() {
        return this.duracaoTratamento;
    }
    set setDuracaoTratamento(duracaoTratamento) {
        this.duracaoTratamento = duracaoTratamento;
    }
    get getTerapia() {
        return this.terapia;
    }
    set setTerapia(terapia) {
        this.terapia = terapia;
    }
    get getHistoricoFamiliar() {
        return this.historicoFamiliar;
    }
    set setHistoricoFamiliar(historicoFamiliar) {
        this.historicoFamiliar = historicoFamiliar;
    }
    get getObservacoes() {
        return this.observacoes;
    }
    set setObservacoes(observacoes) {
        this.observacoes = observacoes;
    }
}
