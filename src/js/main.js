const cep = document.querySelector('#cep')
/* carrega na variavel cep o DOM do input Cep, onde sera
feita a fusca ao remover o foco deste input */

const showData = (result) => {
  for (const campo in result) {
    // aqui inicia o trecho de interesse, com o for-in, corremos o resultado
    // de respota da api e gravo essa resposta no campo result
    if (document.querySelector('#' + campo)) {
      document.querySelector('#' + campo).value = result[campo]
    }
  }
}

cep.addEventListener('blur', (e) => {
  let search = cep.value.replace('-', '')
  const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  }

  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data))
    })
    .catch((e) => console.log('ERRO: ' + e, message))
})
