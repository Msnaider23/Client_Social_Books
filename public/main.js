const gitHubId = document.querySelector('input[type=text]')
const btnBuscar = document.querySelector('input[type=button')
btnBuscar.onclick = function(){
    //Fazendo a conexao com a API
    fetch('http://localhost 8080:/livros'+ gitHubId.value)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            throw new Error('Erro na requisição')
        }
    })
    .then(data => {
        document.querySelector('#nome').textContent = data.nome
        document.querySelector('#editora').textContent = data.editora
        document.querySelector('#resumo').textContent = data.resumo
        document.querySelector('#autor').textContent = data.autor
        document.querySelector('#id').textContent= data.id
        //E outros atributos que voce desejar

    })
    .catch(error =>{
        console.log('Erro:' + error)
    })
}