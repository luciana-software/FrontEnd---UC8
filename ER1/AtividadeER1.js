
/* - A representação de uma lista é porque ela está entre colchetes, e tem posiçoes armazenadas 
     dentro dela, os indices
   - O modelo de lista a seguir, não foi utilizado aqui: listaDePecas[2] = 'Pastilha' 
     porém ele poderia ser utilizado também, só que após os comandos listaDePecas.push('Disco de freio'),
     listaDePecas.push('Motor'), listaDePecas.push('Amortecedro')
    .....................................................................................................
    
    - A quantidade de peças a serem cadastradas na lista é < 10, porém, só existe o cadastro de 3, assim, 
      o sistema retornara mensagem informando que podem ser cadastrar mais peças, pois há espaço.*/
/*let listaDePecas = []

listaDePecas.push('Disco de freio')
listaDePecas.push('Motor')
listaDePecas.push('Amortecedro')

//console.log(listaDePecas[0])
//console.log(listaDePecas[1])
console.log(listaDePecas[2])*/ 

/*.....................................................................................................*/

/*A quantidade de peças a serem cadastradas na lista é < 10, porém, se tiver 10 ou mais, o usuário receberá
  mensagem de lista cheia. Aqui, cadastrei 10 componentes, e o sistema retornará mensagem informando que não
  há espaço para inclusão. Se a peça possuir o peso correto, será informado aqui também.*/

/*let listaDePecas = ['Disco de freio', 'Motor', 'Amortecedro','Parabrisa','Rotor','Platinado','carburador','Filtro de ar','Vela','Cama de ar']

listaDePecas.push('Disco de freio')
listaDePecas.push('Motor')
listaDePecas.push('Amortecedro')
listaDePecas.push('Parabrisa')
listaDePecas.push('Rotor')
listaDePecas.push('Platinado')
listaDePecas.push('carburador')
listaDePecas.push('Filtro de ar')
listaDePecas.push('Vela')
listaDePecas.push('Cama de ar')

//Verificando se a caixa está cheia
if(listaDePecas.length < 10){
    console.log('É poossivel cadastrar mais peças!!!')
}
else{
    console.log('Não há mais espaço na caixa.')
}

//Só e permitido o cadasto de peças acima de 100g. Verificando se o peso da peça é maior que 100g
let peso = 150
if (peso < 100){
    console.log('A peça deve pesar no minimo 100g.')
}
else{
    console.log('A peça possui o peso adequado.')
}
*/

/*.....................................................................................................*/

/*A quantidade de peças a serem cadastradas na lista é < 10, porém, se tiver 10 ou mais, o usuário receberá
  mensagem de lista cheia. Aqui, cadastrei 4 componentes, e o sistema retornará mensagem informando que há 
  espaço para inclusão de outras peças.*/

  /*let listaDePecas = ['Disco de freio', 'Motor', 'Amortecedro','Parabrisa']

  listaDePecas.push('Disco de freio')
  listaDePecas.push('Motor')
  listaDePecas.push('Amortecedro')
  listaDePecas.push('Parabrisa')
  
  //Verificando se a caixa está cheia
  if(listaDePecas.length < 10){
      console.log('É poossivel cadastrar mais peças!!!')
  }
  else{
      console.log('Não há mais espaço na caixa')
  }
  
  //Só e permitido o cadasto de peças acima de 100g. Verificando se o peso da peça é maior que 100g
  // Aqui useii eso = 150g
  //Vai retornar é possivel cadastrar mais peças. A peça possuir o peso adequado
  let peso = 150
  if (peso < 100){
      console.log('A peça deve pesar no minimo 100g.')
  }
  else{
      console.log('A peça possui o peso adequado.')
  }
  let nomePeca = 'Disco de freio'

  //Verificando se o nome da peça está adequado para o cadastro.
  if (nomePeca.length > 3){
      console.log('O nome da peça está adequado para o cadastro')
  }
  else if(nomePeca.length == 0){
      console.log('O nome da peça não pode ser vazio.')  
  } 
  else{
      console.log('O nome da peça deve ter mais de 3 caracteres , digite o nome adequado.') 
  }

  /*.....................................................................................................*/

  /*A quantidade de peças a serem cadastradas na lista é < 10, porém, se tiver 10 ou mais, o usuário receberá
  mensagem de lista cheia. Aqui, cadastrei 4 componentes, e o sistema retornará mensagem informando que há 
  espaço para inclusão de outras peças.*/

  let listaDePecas = ['Disco de freio', 'Motor', 'Amortecedro','Parabrisa']

  listaDePecas.push('Disco de freio')
  listaDePecas.push('Motor')
  listaDePecas.push('Amortecedro')
  listaDePecas.push('Parabrisa')
  
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
  let peso = 80
  if (peso < 100){
      console.log('A peça deve pesar no minimo 100g.')
  }
  else{
      console.log('A peça possui o peso adequado.')
  }
  // se o campo ficar vazio, sem o nome da peça, o sistema retornará mensagem que o nome da peça não
  // pode ficar vazio.
  let nomePeca = ''

  //Verificando se o nome da peça está adequado para o cadastro.
  if (nomePeca.length > 3){
      console.log('O nome da peça está adequado para o cadastro')
  }
  else if(nomePeca.length == 0){
      console.log('O nome da peça não pode ser vazio.')  
  } 
  else{
      //Caso seja digitado outro caractere, retornarA que deve ter mais de 3 caracteres
      console.log('O nome da peça deve ter mais de 3 caracteres , digite o nome adequado.') 
  }
  