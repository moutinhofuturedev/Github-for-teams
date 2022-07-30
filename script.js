const buttonOpen = document.getElementById('open_modal')
const buttonClosed = document.querySelector('.closed_modal')
const secondary = document.querySelector('.wrapper_modal')

buttonOpen.addEventListener('click', OpenModal)
function OpenModal() {
    secondary.classList.remove('invisible')
}

buttonClosed.addEventListener('click', CloseModal)
function CloseModal() {
    secondary.classList.add('invisible')
}


