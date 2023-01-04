const main = document.getElementById('container');
// let divNumber = prompt('how many divs')
function addDives() {
    for(let i=0;i<=50;i++) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('divs');
        // newDiv.textContent=('Hello there')
        main.append(newDiv);
    }
}

addDives();