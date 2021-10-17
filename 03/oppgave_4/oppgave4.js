const COUNT = 10
const RANGE = 100

// TODO: Bruk getElementById til å hente HTML-elementene med #id
const main = document.getElementById("main") // <main>
const desc = document.getElementById("desc") // <p>
const guess = document.getElementById("guess") // <ul>
const numbers = document.getElementById("numbers") // <ul>

// TODO: Bruk querySelector til å hente knappen
const button = document.querySelector("button")

// TODO: Lag en liste med tallene som skal sorteres
const createNumsArray = (count, range) => {
    let nums = new Set();
    while (nums.size < count) nums.add(Math.floor((Math.random() * range) + 1))
    return [...nums];
}

// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
const createFields = numsArray => {
    const list = document.getElementById("numbers")

    for (let i = 0; i < numsArray.length; i++) {
        let node = document.createElement("li")
        let item = list.appendChild(node)
        item.textContent = numsArray[i]
    }
}

const handleFields = target => {
    const list = document.getElementById(target)

    let items = Array.from(list.getElementsByTagName("li"))
    let current = null

    items.forEach(item => {
        item.draggable = true

        item.addEventListener("dragstart", e => {
            current = e.target
            items.forEach(item => (item != current) && item.classList.add("active"))
        })

        item.addEventListener("dragenter", e => (e.target != current) && e.target.classList.add("target"))

        item.addEventListener("dragleave", e => e.target.classList.remove("target"))

        item.addEventListener("dragend", () => items.forEach(item => item.className = ""))

        item.addEventListener("dragover", e => e.preventDefault())

        item.addEventListener("drop", e => {
            e.preventDefault()

            if (e.target != current) {
                let currentpos = 0, droppedpos = 0;

                for (let i = 0; i < items.length; i++) {
                    if (current == items[i])
                        currentpos = i
                    if (e.target == items[i])
                        droppedpos = i
                }

                if (currentpos < droppedpos)
                    e.target.parentNode.insertBefore(current, e.target.nextSibling)
                else
                    e.target.parentNode.insertBefore(current, e.target)

                items = Array.from(list.getElementsByTagName("li"))
            }
        })
    })
}

// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
const getFieldValues = () => {
    let items = Array.from(document.getElementById("numbers").getElementsByTagName("li"))
    return items.map(item => parseInt(item.textContent))
}

// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
const isSorted = numsArray => {
    for (let i = 1; i < numsArray.length; i++) {
        if (numsArray[i - 1] > numsArray[i])
            return false
    }
    return true
}

// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk
const handleClick = () => console.log(isSorted(getFieldValues()))

// TODO: Lag en funksjon som "lager UI" --Nødvendig?
const initialize = () => {
    createFields(createNumsArray(COUNT, RANGE))
    window.addEventListener("DOMContentLoaded", handleFields("numbers"));
    button.addEventListener("click", handleClick)
}
initialize()