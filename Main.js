const numeroSenha = document.querySelector('.parametro-senha__texto');
 let tamanhoSenha = 5;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1)
   // tamanhoSenha = tamanhoSenha + 1;
  tamanhoSenha--;
}
    numeroSenha.textContent = tamanhoSenha;
gerasenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 30) {
   // tamanhoSenha = tamanhoSenha - 1;     
     tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
gerasenha();
}
console.log(botoes);

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
geraSenha();

function geraSenha(){
let senha='';
 for(let i=0;i<tamanhosenha;i++){
 let numeroAleatorio = Math.random()*letrasMaiusculas.length;
numeroAleatorio=math.floor(numeroAleatorio);
 senha=senha+letrasmaiusculas[numerosAleatorio];
  
}
campoSenha.value = senha;







