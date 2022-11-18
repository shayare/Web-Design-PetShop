const login = document.getElementById('dialog_login')
const modal = document.querySelector("dialog")
const back = document.getElementById('come_back')

login.onclick = function(){
    modal.showModal()
}

back.onclick = function(){
    modal.close()
}

//password

let container = document.querySelector(".senha")
let input = document.getElementById('password')
let icon = document.getElementById('eye_img')

icon.addEventListener('click', function(){
    container.classList.toggle('visible')
    if(container.classList.contains('visible')){
        icon.src = 'image/crossed-eye.png'
        input.type = 'text' 
    }else{
        icon.src = 'image/eye.png'
        input.type = 'password'
    }
})
