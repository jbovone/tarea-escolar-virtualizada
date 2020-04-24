
function setGrid() {
    for (let i = 0; i < 1001; i += 10) {
        const $cell = document.createElement('span')
        $cell.className = 'cell'
        if ((i + '').split('')[1] === '2') {
            appendInput('type2')
        } else if ((i + '').split('')[1] === '5') {
            appendInput('type5')
        } else {
            $cell.textContent = i
            document.querySelector('#grid').appendChild($cell)
        }
        function appendInput(type) {
            const $cellInput = document.createElement('input')
            $cellInput.className = `cell ${type}`
            $cellInput.id = i + ''
            document.querySelector('#grid').appendChild($cellInput)
        }
    }
    document.querySelectorAll('.cell')[2].classList.add('type2')
    document.querySelectorAll('.cell')[5].classList.add('type5')
    return document.querySelectorAll('input')
}
const $inputsGrid = setGrid()

$inputsGrid.forEach(input => input.addEventListener('change', () => {
    if (input.id === input.value) {
        input.classList.add('success')
        input.classList.remove('error')
    } else {
        input.classList.remove('success')
        input.classList.add('error')
    }
    if (input.value.length > 3) {
        input.value = `${input.value[0]}${input.value[1]}${input.value[2]}`
    }
    let success = true
    document.querySelectorAll('input').forEach(input => {
        if (input.className.match(/error/) | /^(cell type5|3)$/.test(input.classList)) {
            success = false
        }
    })
    if (success) {
        congrats()
    }
}))

function congrats() {
    const $success = document.createElement('div')
    $success.className = 'win'
    $success.textContent = 'Bien Estas Aprendiendo!!!'
    document.querySelector('#grid').appendChild($success)
}