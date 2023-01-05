const main = document.getElementById('container');
let divNumber = prompt('how many divs')
function addDives(divNumber) {
    for(let i=0;i<divNumber;i++) {
        for(let x=divNumber;x>0;x--){
            let col = document.createElement('div');
            col.classList.add('row');
            main.style.gridTemplateColumns = `repeat(${divNumber},1fr)`;
            main.style.gridTemplateRows= `repeat(${divNumber},1fr)`;
            main.append(col);
            col.addEventListener('mouseover',() => {
                col.classList.toggle('colour')
            })
        }
    }
}



addDives(divNumber);

