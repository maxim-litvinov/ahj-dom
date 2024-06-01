import './style.css';
import gnomeImage from './images/gnome.png';

const gridContainer = document.getElementById('grid-container');
const gridSize = 4;
let characterPosition = 0; 

function createGrid() {
	for (let i = 0; i < gridSize * gridSize; i++) {
		const cell = document.createElement('div');
		cell.classList.add('cell');
		gridContainer.appendChild(cell);
	}
}

function placeCharacter(position) {
	const cells = document.querySelectorAll('.cell');
	const character = document.createElement('img');
	character.src = gnomeImage;
	cells[position].appendChild(character);
}

function moveCharacter(event) {
	const key = event.key;
	let newPosition = characterPosition;

	switch (key) {
		case 'ArrowUp':
			if (newPosition >= gridSize) {
				newPosition -= gridSize;
			}
			break;
		case 'ArrowDown':
			if (newPosition < gridSize * (gridSize - 1)) {
				newPosition += gridSize;
			}
			break;
		case 'ArrowLeft':
			if (newPosition % gridSize !== 0) {
				newPosition--;
			}
			break;
		case 'ArrowRight':
			if ((newPosition + 1) % gridSize !== 0) {
				newPosition++;
			}
			break;
		default:
			return;
	}

	const cells = document.querySelectorAll('.cell');
	cells[characterPosition].innerHTML = ''; 
	characterPosition = newPosition;
	placeCharacter(characterPosition);
}

createGrid();
placeCharacter(characterPosition);

document.addEventListener('keydown', moveCharacter);