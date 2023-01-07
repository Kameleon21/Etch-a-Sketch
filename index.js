const main = document.getElementById('container');
// const firstBtn = document.getElementById('btnOne');
// const secondBtn = document.getElementById('btnTwo');
// const thirdBtn = document.getElementById('btnThree');
// const clearBtn = document.getElementById('clear');
const allBtn = document.querySelectorAll('button');

let divNumber=10;

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

// clears the cols
function clearGrid() {
    main.innerHTML = '';
}

window.onload= addDives(5);

// creates a random color each time 
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}


allBtn.forEach(allBtn => {
    allBtn.addEventListener('click', (e) => {
        if(e.target.id == "btnOne"){
            clearGrid();
           divNumber=16
           addDives(divNumber);
        } else if(e.target.id == "btnTwo"){
            clearGrid();
            divNumber=32;
            addDives(divNumber);
        } else if(e.target.id == "btnThree"){
            clearGrid();
            divNumber=64;
            addDives(divNumber);
        } else if(e.target.id == "clear"){
            divNumber =10
            clearGrid()
            addDives(divNumber);
        }
    })
})



