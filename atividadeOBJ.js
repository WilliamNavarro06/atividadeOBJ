let pessoas = [
  {
    cpf: "123.456.780-00",
    nome: "José Carlos",
    idade: 28
  },
  {
    cpf: "987.654.321-00",
    nome: "Bolsonaro",
    idade: 35
  }
];

function adicionarPessoa(cpf, nome, idade) {
  pessoas.push({ cpf, nome, idade });
  console.log(`Pessoa "${nome}" adicionada com sucesso.`);
}

function exibirPessoas() {
  console.log("Lista de Pessoas:");
  pessoas.forEach(pessoa => {
    console.log(`CPF: ${pessoa.cpf} | Nome: ${pessoa.nome} | Idade: ${pessoa.idade}`);
  });
}

function atualizarIdade(cpf, novaIdade) {
  const pessoa = pessoas.find(p => p.cpf === cpf);
  if (pessoa) {
    pessoa.idade = novaIdade;
    console.log(`Idade de ${pessoa.nome} atualizada para ${novaIdade} anos.`);
  } else {
    console.log(`Pessoa com CPF ${cpf} não encontrada.`);
  }
}

// Demonstração
exibirPessoas(); // Exibe a lista atual
adicionarPessoa("222.333.444-55", "Inacio Lula", 45);
atualizarIdade("123.456.789-00", 69);
exibirPessoas();
