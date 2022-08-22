const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)

})

function dragstart(evt) {
    evt.target.classList.add('hold');
    setTimeout(() => evt.target.classList.add('hide'), 0)
}

function dragend(evt) {
    evt.target.className = 'item';

}

function dragover(evt) {
    evt.preventDefault();
}

function dragenter(evt) {
    evt.target.classList.add('hovered');
}

function dragleave(evt) {
    evt.target.classList.remove('hovered');
    
}

function drop(evt) {
    evt.target.append(item);
    evt.target.classList.remove('hovered');
}