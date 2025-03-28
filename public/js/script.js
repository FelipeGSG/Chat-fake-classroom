const imgInscricoes = document.querySelectorAll(".itemInscricao span")
const turmas = document.querySelectorAll(".inscricaoText h4")

imgInscricoes.forEach((img, i) =>{
    let letra = turmas[i].innerText
    letra = letra.charAt(0)

    img.innerText = letra
})

var nome = ""
var cor = ""
var letra = ""


function sendName(){
    const username = document.getElementById("nome").value
    if(username.trim() == ""){
        return
    }
    if(username.length > 100){
        alert("Nome muito longo")
        document.getElementById("nome").value = ""
        return
    }
    nome = username
    var letter = username.charAt(0).toUpperCase()
    letra = letter
    document.getElementById("showCustomUser").innerHTML = letter

    document.getElementById("divMandarNome").style.display = "none"
    document.getElementById("divMandarCor").style.display = "block"
}

function changeColor(){
    const hue = document.getElementById("inputHue").value
    const light = document.getElementById("inputLight").value
    document.getElementById("hue").innerHTML = hue
    document.getElementById("light").innerHTML = light

    document.getElementById("showCustomUser").style.backgroundColor = `hsl(${hue}, 100%, ${light}%)`
}

function sendColor(){
    const hue = document.getElementById("inputHue").value
    const light = document.getElementById("inputLight").value
    
    cor = `hsl(${hue}, 100%, ${light}%)`

    document.getElementById("customUser").style.display = "none"
    document.getElementById("chat").style.display = "block"
}

function scrollBottom(){
    var msgs = document.getElementById("mensagens")
    msgs.scrollTop = msgs.scrollHeight
}