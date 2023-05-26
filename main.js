const contatosNomes = [];
const contatosTelefones = [];
let linhasTabelaContato = '';
const tabelaContatos = document.getElementById('tabela-contatos');


tabelaContatos.addEventListener('click', function(event) {
    const elementoClicado = event.target;

    if (elementoClicado.matches('.editar-contato')) {
        const linhaContato = elementoClicado.closest('tr');
        const nomeContato = linhaContato.querySelector('.nome-contato').textContent;
        const telefoneContato = linhaContato.querySelector('.telefone-contato').textContent;
        
        // Faça aqui o que deseja ao editar o contato
        const index = contatosNomes.indexOf(nomeContato);
        contatosNomes[index] = prompt("Digite o novo nome do contato");
        contatosTelefones[index] = prompt("Digite o novo telefone do contato");
        atualizarTabela();
    }
    
    // Verifica se o botão "Remover Contato" foi clicado
    if (elementoClicado.matches('.remover-contato')) {
        const linhaContato = elementoClicado.closest('tr');
        const nomeContato = linhaContato.querySelector('.nome-contato').textContent;
        const telefoneContato = linhaContato.querySelector('.telefone-contato').textContent;
        
        // Faça aqui o que deseja ao remover o contato
        const index = contatosNomes.indexOf(nomeContato);
        contatosNomes.splice(index, 1);
        contatosTelefones.splice(index, 1);
        atualizarTabela();
        
        // Remova a linha da tabela (opcional)
        linhaContato.remove();
    }
});
    
const form = document.getElementById('form-contatos');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  adicionarContato();
  atualizarTabela();
});

function adicionarContato() {
  const inputNomeContato = document.getElementById('nome-contato');
  const inputTelContato = document.getElementById('telefone-contato');

  if (contatosNomes.includes(inputNomeContato.value)) {
    alert(`O contato ${inputNomeContato.value} já foi adicionado à agenda.`);
  } else {
    contatosNomes.push(inputNomeContato.value);
    contatosTelefones.push(inputTelContato.value);

    let linha = '<tr>';
    linha += `<td class="nome-contato">${inputNomeContato.value}</td>`;
    linha += `<td class="telefone-contato">${inputTelContato.value}</td>`;
    linha += '<td><button class="editar-contato">Editar</button></td>';
    linha += '<td><button class="remover-contato">Remover</button></td>';
    linha += '</tr>';

    linhasTabelaContato += linha;
  }

  inputNomeContato.value = '';
  inputTelContato.value = '';
}

function atualizarTabela() {
  let linhasTabelaContato = '';
  for (let i = 0; i < contatosNomes.length; i++) {
    let linha = '<tr>';
    linha += `<td class="nome-contato">${contatosNomes[i]}</td>`;
    linha += `<td class="telefone-contato">${contatosTelefones[i]}</td>`;
    linha += '<td><button class="editar-contato">Editar</button></td>';
    linha += '<td><button class="remover-contato">Remover</button></td>';
    linha += '</tr>';

    linhasTabelaContato += linha;
  }

  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhasTabelaContato;
}