// carousel

var balls = document.querySelector('.balls_carousel')
var quant = document.querySelectorAll('.carousel-inner .item')
var atual = 0
var imagem = document.getElementById('atual')
var proximo = document.querySelector('.proximo')
var voltar = document.querySelector('.voltar')
var rolar= true

for(let i=0; i<quant.length; i++){
    var div = document.createElement('div')
    div.id = i
    balls.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.balls_carousel div')

for(let i=0; i<pos.length;i++){
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id
        rolar = false
        slide()
    })
}

voltar.addEventListener('click', ()=>{
    atual--
    slide()
})

proximo.addEventListener('click', ()=>{
    atual++
    slide()
})

function slide(){
    if(atual >= quant.length){
        atual = 0
    }
    else if(atual < 0){
        atual = quant.length-1
    }
    document.querySelector('.imgAtual').classList.remove('.imgAtual')
    imagem.style.marginLeft = -700*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}

    setInterval(()=>{
        atual++
        slide()
    },5000)

