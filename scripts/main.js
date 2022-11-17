let minhaImagem = document.querySelector('img');

minhaImagem.onclick = function() {
    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === 'imagens/learn.png') {
      minhaImagem.setAttribute ('src','imagens/learn2.png');
    } else {
      minhaImagem.setAttribute ('src','imagens/learn.png');
    }
}

let meuBotao = document.querySelector('button');
let meuCabecalho = document.querySelector('h1');

function defineNomeUsuario() {
	let meuNome = prompt('Por favor, digite seu nome.');
	if(!meuNome || meuNome === null) {
		defineNomeUsuario();
	}
	else
	{
	  
	  localStorage.setItem('nome', meuNome);
	  meuCabecalho.textContent = 'Seu nome é: ' + meuNome;
  }
}

if(!localStorage.getItem('nome')) {
  defineNomeUsuario();
} else {
  let nomeGuardado = localStorage.getItem('nome');
  meuCabecalho.textContent = 'Seu nome gravado é legal, ' + nomeGuardado;
}

meuBotao.onclick = function() { 
minhaImagem.onclick();
defineNomeUsuario();


}