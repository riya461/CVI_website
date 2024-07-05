const fishAudio = document.getElementById('fishAudio');
const fishElement = document.querySelector('.fish');
const redButton = document.getElementById('red');
const orangeButton = document.getElementById('orange');
const soundbtn = document.getElementById('sound');

const toggleButton = document.getElementById('toggle');
toggleButton.addEventListener('click', () => {
    
    const controls = document.getElementById('controls');
    const display = controls.style.display;
    controls.style.display = display === 'block' ? 'none' : 'block';
    toggleButton.innerHTML = display === 'block' ? 'Show Controls' : 'Hide Controls';

    


});

redButton.addEventListener('click', () => {
    changeFishColor('red');
});

orangeButton.addEventListener('click', () => {
    changeFishColor('orange');
});
soundbtn.addEventListener('click', () => {
    toggleSound();
});
function toggleSound() {
    if (fishAudio.paused) {
        fishAudio.play();
    } else {
        fishAudio.pause();
    }
}

function changeFishColor(color) {
    fishElement.style.backgroundColor = color;
    // :before fish change to orange too
    const fishBefore = fishElement.querySelector('.fish::before');
    fishBefore.style.backgroundColor = color;
    
}
