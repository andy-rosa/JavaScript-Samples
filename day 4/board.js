const board = document.querySelector('#board');
const color = ['#396B24', '#532673', '#CF6F6E', '#B95EC9', '#2D3A86', '#A48437']
const SQUAERES_NUMBER = 50000;

for (let i = 0; i < SQUAERES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () =>
        setColor(square))
    
    square.addEventListener('mouseleave', () =>
        removeColor(square))

    board.append(square)
    }

    function setColor(element) {
        const color = getRandomColor()
        element.style.backgroundColor = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

      function removeColor(element) {
        element.style.backgroundColor = '#1d1d1d'
        element.style.boxShadow = `0 0 2px #000`
    }

    function getRandomColor() {
        const index = Math.floor(Math.random() * color.length);
        return color[index]
    }