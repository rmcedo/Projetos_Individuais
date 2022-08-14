import { Pacientes } from "./Pacientes.js";

let pacienteRafael = new Pacientes("Rafael da Silva Macedo", "03/08/1994", 28, ["SC", "Brusque", "São Luiz", "Leopoldo Imhof", "264", "Apto. 321C"], "(53) 981062990", "(53) 32263677", "Estoquista Pleno", "Com namorada", true, true, "2 anos", true, true, "Medicamentos: Hemifumarato de Quetiapina e Cloridrato de Sertralina")

console.log(pacienteRafael);

console.log("Nome:", pacienteRafael.nome)
console.log("Data de Nascimento:", pacienteRafael.dataNascimento)
console.log("Idade:", pacienteRafael.idade)
console.log("Endereço:", pacienteRafael.endereco)
console.log("Telefone de Contato:", pacienteRafael.telefoneContato)
console.log("Telefone p/ Emergências:", pacienteRafael.telefoneEmergencia)
console.log("Ocupação:", pacienteRafael.ocupacao)
console.log("Mora com alguém?", pacienteRafael.moradia)
console.log("Realiza Tratamento Psiquiátrico?", pacienteRafael.getTratamentoPsi)
console.log("Toma alguma medicação", pacienteRafael.getMedicacao)
console.log("Qual a duração do Tratamento Psiquiátrico?", pacienteRafael.getDuracaoTratamento)
console.log("Faz sessões de Terapia?", pacienteRafael.getTerapia)
console.log("Possui Histórico de Tratamento ou Doença Psiquiátrica na Família?", pacienteRafael.getHistoricoFamiliar)
console.log("Observações sobre o Paciente:", pacienteRafael.getObservacoes)




// =================> PESQUISAR COMO MOSTRAR ISSO EM TELA E NÃO APENAS NO CONSOLE <================= //