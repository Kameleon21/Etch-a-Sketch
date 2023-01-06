const main = document.getElementById('container');
let divNumber = 10;
function addDives(divNumber) {
    for(let i=0;i<divNumber;i++) {
        for(let x=divNumber;x>0;x--){
            let col = document.createElement('div');
            col.classList.add('row');
            col.style.width = `500/${divNumber}px`
            col.style.height = `500/${divNumber}px`
            main.style.gridTemplateColumns = `repeat(${divNumber},1fr) `;
            main.style.gridTemplateRows= `repeat(${divNumber},1fr) `;
            main.append(col);
            col.addEventListener('mouseover',() => {
                col.style.backgroundColor = `${randColor()}`;
            })
        }
    }
}

// creates a random color each time 
const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

addDives(divNumber);

