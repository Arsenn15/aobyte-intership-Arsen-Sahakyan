const rectangle = document.querySelector('.rectangle');
const input = document.getElementById('rectangleRowCount');
input.addEventListener('keydown', drawRectangle);
const rotateBtn = document.getElementById('rotateBtn')
rotateBtn.addEventListener('click', rotateRectangle);

function rotateRectangle() {
    if (rectangle.style.flexDirection === 'column-reverse') {
        rectangle.style.flexDirection = 'column'
    } else {
        rectangle.style.flexDirection = 'column-reverse'
    }
}

function drawRectangle(event) {
    if (event.key === 'Enter') {
        const inputValue = input.value;
        if (inputValue === 0 || inputValue === undefined) return;

        rectangle.innerHTML = '';

        for (let i = 1; i <= inputValue; i++) {
            const starsRow = document.createElement('span');
            starsRow.style.textAlign = 'center';

            for (let j = 0; j < i; j++) {
                const star = document.createElement('span');
                star.innerText = '*';
                star.style.marginRight = '20px';
                star.style.color = "#51C0FF"
                starsRow.appendChild(star);
            }

            rectangle.appendChild(starsRow);

            const lineBreak = document.createElement('br');
            rectangle.appendChild(lineBreak);
        }
    }
}