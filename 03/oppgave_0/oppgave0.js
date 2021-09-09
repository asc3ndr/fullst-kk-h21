// Oppgave 1
const removeTarget = document.getElementById("remove")
const removeBtn = document.getElementById("remove-btn")

removeBtn.addEventListener("click", event => {
    event.preventDefault()
    removeTarget.remove()
})

// Oppgave 2
const changeTarget = document.getElementById("change")
const changeBtn = document.getElementById("change-btn")

changeBtn.addEventListener("click", event => {
    event.preventDefault()
    changeTarget.textContent = Math.floor(Math.random() * 100) + 1
})

// Oppgave 3
const inputTarget = document.getElementById("input-text")
const inputTextBox = document.getElementById("input")

inputTextBox.addEventListener("input", event => {
    event.preventDefault()
    inputTarget.textContent = event.target.value
})

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];

const ulTarget = document.getElementById("ul")
const ulBtn = document.getElementById("write-list")

ulBtn.addEventListener("click", event => {
    event.preventDefault()
    myList.forEach(element => {
        let node = document.createElement("li")
        node.textContent = element
        ulTarget.appendChild(node)
    });
})

// Oppgave 5
const addElement = () => {
    const dropdown = document.getElementById("select")
    const inputBox = document.getElementById("text")
    const placeholder = document.getElementById("placeholder")

    let node = document.createElement(dropdown.value)
    let newElement = placeholder.appendChild(node)
    newElement.textContent = inputBox.value
}

const createBtn = document.getElementById("create")
createBtn.addEventListener("click", addElement)

// Oppgave 6
const removeLi = () => {
    let liList = document.getElementById("list")
    liList.removeChild(liList.childNodes[0])
}

document.getElementById("remove-li").addEventListener("click", removeLi)

// Oppgave 7
const handleKeyboardClick = event => {
    let btn = document.getElementById("order")
    event.target.value.length >= 4 ? btn.disabled = true : btn.disabled = false
}
document.getElementById("name").addEventListener("keyup", handleKeyboardClick)

// Oppgave 8
const handleColorChange = () => {
    let list = document.querySelector(".children").getElementsByTagName("li")

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        i % 2 === 0 ? item.style.border = "1px solid green" : item.style.border = "1px solid pink"
    }
}
document.getElementById("color").addEventListener("click", handleColorChange)