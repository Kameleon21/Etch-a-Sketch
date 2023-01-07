const main = document.getElementById('container');
const clear =document.getElementById('clear');
let divNumber=5;

function addDives(divNumber) {
    for(let i=0;i<divNumber;i++) {
        for(let x=divNumber;x>0;x--){
            let col = document.createElement('div')
            col.setAttribute('id','row');
            col.style.width = `400/${divNumber}px`
            col.style.height = `400/${divNumber}px`
            main.style.gridTemplateColumns = `repeat(${divNumber},1fr) `;
            main.style.gridTemplateRows= `repeat(${divNumber},1fr) `;
            main.append(col);
            col.addEventListener('mouseover',() => {
                col.style.backgroundColor= `${randColor()}`
            })
        }
    }
}
// creates a new grid with new dimensions
function createGrid(value) {
    clearGrid()
    addDives(value);
}

// clears the cols
function clearGrid() {
    main.innerHTML = '';
}

window.onload= addDives(5);

// creates a random color each time 
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

clear.addEventListener('click', () => {
    createGrid(5);
});



