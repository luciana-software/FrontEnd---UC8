  /*A quantidade de peças a serem cadastradas na lista é < 10, porém, se tiver 10 ou mais, o usuário receberá
  mensagem de lista cheia. Aqui, cadastrei 4 componentes, e o sistema retornará mensagem informando que há 
  espaço para inclusão de outras peças.*/

  let listaDePecas = ['Disco de freio', 'Motor', 'Amortecedro']

  listaDePecas.push('Disco de freio')
  listaDePecas.push('Motor')
  listaDePecas.push('Amortecedro')
  
  //Verificando se a caixa está cheia
  if(listaDePecas.length < 10){
      console.log('É poossivel cadastrar mais peças!!!')
  }
  else{
      console.log('Não há mais espaço na caixa')
  }
  //Só e permitido o cadasto de peças acima de 100g. Verificando se o peso da peça é maior que 100g
  
  //Aqui usei peso = 80g
  //Vai retornar é possivel cadastrar mais peças. A peça possuir no minimo 100g
  let peso = 150
  if (peso < 100){
      console.log('A peça deve pesar no minimo 100g.')
  }
  else{
      console.log('A peça possui o peso adequado.')
  }
  // se o campo ficar vazio, sem o nome da peça, o sistema retornará mensagem que o nome da peça não
  // pode ficar vazio.
  let nomePeca = 'Freio'

  switch (nomePeca.length) {
    case 1:
        console.log('O nome da peça não pode ser vazio')
        break;
    case 1:
    case 2:
    case 3:
        console.log('O nome da peça deve ter mais de 3 caracteres')
    default:
        console.log('O nome da peça está adequado para o caadastro')

    break;
  }
  //Verificando se o nome da peça está adequado para o cadastro.
  /*if (nomePeca.length > 3){
      console.log('O nome da peça está adequado para o cadastro')
  }
  else if(nomePeca.length == 0){
      console.log('O nome da peça não pode ser vazio.')  
  } 
  else{
      //Caso seja digitado outro caractere, retornarA que deve ter mais de 3 caracteres
      console.log('O nome da peça deve ter mais de 3 caracteres , digite o nome adequado.') 
  }
  */