let input = document.getElementById('RGB-value')
let table = document.getElementById('RBG-table')
let tbody = table.querySelector('tbody')

let copyTBody = document.querySelector('#copy-table-body')
let moveTBody = document.querySelector('#move-table-body')

let colorPalette = document.getElementById('color-palette')
let copyInput1 = document.getElementById('copy-input-1')
let copyInput2 = document.getElementById('copy-input-2')
let moveInput1 = document.getElementById('move-input-1')
let moveInput2 = document.getElementById('move-input-2')

let r = 0
let g = 0
let b = 0

function generate() {
    r = Math.floor(Math.random()*256)
    g = Math.floor(Math.random()*256)
    b = Math.floor(Math.random()*256)

    input.value = `rgb(${r}, ${g}, ${b})`
    colorPalette.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

function add() {
    if(input.value.length !== 0){
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${r}</td>
        <td>${g}</td>
        <td>${b}</td>
        `
        tbody.appendChild(row)
        input.value = ""
        colorPalette.style.backgroundColor = `rgb(${255}, ${255}, ${255})`
    }
}

function sortTable(columnIndex) {
    let rows = Array.from(tbody.rows)
    rows.sort((a, b)=>{
        let cellA = Number(a.cells[columnIndex].textContent)
        let cellB = Number(b.cells[columnIndex].textContent)
        return cellA - cellB
    })
    rows.forEach(row =>{
        console.log(row)
        tbody.appendChild(row)
    })
}

function copy() {
    let a = Number(copyInput1.value)
    let b = Number(copyInput2.value)
    if(tbody.innerText === ""){
        alert('Enter some values')
    }
    else if(a === 0){
        alert("Value should start with 1")
    }
    else{
        let rows = table.getElementsByTagName('tr')
        for(let i=a; i<=b; i++){
            console.log(rows[i])
            copyTBody.appendChild(rows[i].cloneNode(true))
        }
    }
}

function move() {
    let a = Number(moveInput1.value)+1
    let b = Number(moveInput2.value)
    if(tbody.innerText === ""){
        alert('Enter some values')
    }
    else if(a === 0){
        alert("Value should start with 1")
    }
    else{
        let rows = table.getElementsByTagName('tr')
        for(let i=a; i<=b; i++){
            console.log(rows[i])
            moveTBody.appendChild(rows[i])
        }
    }
}