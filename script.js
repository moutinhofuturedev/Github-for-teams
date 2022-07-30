const buttonOpen = document.getElementById('open_modal')
const buttonClosed = document.querySelector('.closed_modal')
const secondary = document.querySelector('.wrapper_modal')
const myApi = document.querySelector('#api')

buttonOpen.addEventListener('click', OpenModal)
function OpenModal() {
    secondary.classList.remove('invisible')
}

buttonClosed.addEventListener('click', CloseModal)
function CloseModal() {
    secondary.classList.add('invisible')
}

let database = {
    name: '',
    bio: '',
    location: '',
}

async function fetchApi() {
    const li = document.createElement('li')

    fetch('https://api.github.com/users/moutinhofuturedev')
    .then(response => response.json())
    .then(data => {
        let newData = (database) = {
            name: data.name,
            bio: data.bio,
            location: data.location
        }

        return `<ol>
        ${li} ${newData}
        </ol>`
    })
}
console.log(fetchApi())
