const ball = document.getElementById('ball');
const bounceSound = document.getElementById('bounceSound');

let ballSpeed = 1; // Initial speed multiplier

document.getElementById('orange').addEventListener('click', () => changeColor('orange'));
document.getElementById('red').addEventListener('click', () => changeColor('red'));

document.getElementById('speedUp').addEventListener('click', () => changeSpeed(1.2));
document.getElementById('speedDown').addEventListener('click', () => changeSpeed(0.8)); // Adjusted for speed down
document.getElementById('sizeUp').addEventListener('click', () => changeSize(1.1));
document.getElementById('sizeDown').addEventListener('click', () => changeSize(0.9));

ball.addEventListener('animationiteration', () => bounceSound.play());

const toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', () => {
    
    const controls = document.getElementById('controls');
    const display = controls.style.display;
    controls.style.display = display === 'flex' ? 'none' : 'flex';
    toggleButton.innerHTML = display === 'flex' ? 'Show Controls' : 'Hide Controls';

    


});
function changeColor(color) {
    ball.style.backgroundColor = color;
}

function changeSpeed(factor) {
    ball.style.animationDuration = `${8 / factor}s`; // Adjust animation duration based on speed factor
    ballSpeed *= factor;
}

function changeSize(factor) {
    const currentSize = parseInt(getComputedStyle(ball).width);
    const newSize = currentSize * factor;
    ball.style.width = `${newSize}px`;
    ball.style.height = `${newSize}px`;
}



