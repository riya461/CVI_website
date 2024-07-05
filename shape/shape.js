const tiles = document.querySelectorAll('.tile');
const dropzones = document.querySelectorAll('.dropzone');
const shapeButton = document.getElementById('shape');
const resetButton = document.getElementById('reset');

let isDark = false;


tiles.forEach(tile => {
    tile.addEventListener('dragstart', dragStart);
    tile.addEventListener('dragend', dragEnd);
});

dropzones.forEach((dropzone, index) => {
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', drop);

  
});

let draggedTile = null;

function dragStart(e) {
    draggedTile = this;
    setTimeout(() => this.classList.add('invisible'), 0);
}

function dragEnd(e) {
    this.classList.remove('invisible');
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave(e) {
    this.classList.remove('hovered');
}

function drop(e) {
    this.classList.remove('hovered');
    const droppedPosition = this.getAttribute('position');
    const draggedPosition = draggedTile.getAttribute('position');
    // the dragged position should be child of the dropped position
    // if not, then return
    
    
    // 
    if (droppedPosition === draggedPosition) {
    // append this to child of the dropped position
    const dropzone = document.querySelector(`.dropzone[position="${droppedPosition}"]`);
    const dropzoneChild = dropzone.children[0];
    dropzoneChild.appendChild(draggedTile);
    }
}

shapeButton.addEventListener('click', toggleShape);
resetButton.addEventListener('click', resetPuzzle);

// Shuffle the tiles and dropzones randomly
function resetPuzzle() {
    console.log('Resetting puzzle...');
    // Shuffle tiles
    const tilesArray = Array.from(tiles);
    const shuffledTiles = tilesArray.sort(() => Math.random() - 0.5);
    const tilesContainer = document.querySelector('.tiles-container');
    tilesContainer.innerHTML = ''; // Clear the container
    shuffledTiles.forEach(tile => tilesContainer.appendChild(tile));

    // Shuffle dropzones
    const dropzonesArray = Array.from(dropzones);
    const shuffledDropzones = dropzonesArray.sort(() => Math.random() - 0.5);
    const puzzleContainer = document.querySelector('.puzzle-container');
    puzzleContainer.innerHTML = ''; // Clear the container
    // get its child 
    
    shuffledDropzones.forEach(dropzone => puzzleContainer.appendChild(dropzone));
}

// Toggle the background color of the dropzones between dark color and original colors
function toggleShape() {
    isDark = !isDark;
    // on toggle colourview and imageview

    const colourview = document.getElementsByClassName('colourview');
    const imageview = document.getElementsByClassName('imageview');
    if (!isDark) {
        // show imageview
        for (let i = 0; i < colourview.length; i++) {
            colourview[i].style.display = 'none';
            imageview[i].style.display = 'block';
        }
    } else {
        // show colourview
        for (let i = 0; i < colourview.length; i++) {
            colourview[i].style.display = 'block';
            imageview[i].style.display = 'none';
        }
    }
    
    
}
