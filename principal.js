// Faça seu exercício neste arquivo


// Alguns elementos importantes na página (index.html):
// #rolar: Botão rolar
//	 - você deve atribuir um handler de evento a ele para fazer o cálculo da rolagem dos dados
// #resultado: Elemento cujo conteúdo deve ser uma string com os resultados
//	 - você deve definir seu conteúdo (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados:
//	 - você deve torná-lo visível removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

function init(){

  var i;
  var j;

  var dados = [4, 6, 8, 10, 12, 20];

  var quantidades;

  var rolados;

  var resultado = document.getElementById('resultado');

  var sorteio;

  var soma;

  var exibicao;

  var rolar = document.getElementById('rolar');

  rolar.addEventListener('click',
    function(e){
      soma = 0;
      rolados = [];
      quantidades = [];
      for(i=0; i<dados.length; i++){
        quantidades.push(document.getElementById('quantidadeD' + dados[i]).value);
        for(j=0; j<quantidades[i]; j++){
          sorteio = Math.floor(Math.random()*dados[i]) + 1;
          soma = soma + sorteio;

          rolados.push(sorteio);
        }
      }

      exibicao = '';
      for(i=0; i<rolados.length; i++){
        exibicao = exibicao + rolados[i];
        if(i != rolados.length-1){
          exibicao = exibicao + ' + ';
        }
      }
      exibicao = exibicao + ' = ' + soma;

      resultado.textContent = exibicao;

      resultado.parentNode.classList.remove('oculto');
    }
  );

}

init();
