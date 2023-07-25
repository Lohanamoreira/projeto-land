var SetaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
        leonardo.style ="display:none"
        bruna.style ="display:flex"
        SetaDireita.style ="display:none"
        SetaEsquerda.style ="display:flex; margin-top:55px"
    }
    
function RolarParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    SetaDireita.style ="display:flex; margin-top:55px"
    SetaEsquerda.style ="display:none"

}