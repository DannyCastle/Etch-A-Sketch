function randomRGB (){
    return Math.floor(Math.random() * 256);
}

function createGrid (size){
    if (size === undefined) {
        size = 16;
    }



    const container = document.querySelector('#grid-ctn');
    squareWidth = 960 / size;
    container.style['grid-template-columns'] = `repeat(${size}, ${squareWidth}px)`;

    for (i = 1; i <= size; ++i){
        for (j = 0; j < size; ++j){
            let div = document.createElement('div');
            /* let p = document.createElement('p');
            p.textContent = i; */
            container.appendChild(div);
            //div.appendChild(p);
        }


    }
    const squares = document.querySelectorAll('#grid-ctn > div');

    squares.forEach((square) => {
        square.style['min-height'] = `${squareWidth}px`;
        //square.style['background-color'] = 'blue';
        square.addEventListener('mousemove', e =>{
            let colors = [];
            colors[0] = randomRGB();
            colors[1] = randomRGB();
            colors[2] = randomRGB();

            square.style['background-color'] = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
        })
    });
}

function resetGrid(){
    const container = document.querySelector('#grid-ctn');


    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    let valid = false;
    let gridSize = 16;
    do {
        gridSize = prompt('Gride size? (max 100)', 16);
        if (gridSize != NaN && gridSize <= 100 && gridSize > 0){
            valid = true;

        }


    }
    while (!valid);


    createGrid(gridSize);
}

const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click', () => {
    resetGrid();
    })





createGrid();
