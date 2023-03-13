// VARIAVEIS => Um espaço da memoria do Computador que guardamos algo
// FUNÇÃO => Um trecho de codigo que só é executado quando é chamado

let chave = "caabf235ff6b231b5862812b42594c69"

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".temperaturamin").innerHTML = "Min: " + Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".temperaturamax").innerHTML = "Max: " + Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + Math.floor(dados.main.feels_like) + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}


async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric") 
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}

    
function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)

}
