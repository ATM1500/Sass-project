const sortButton = document.getElementById('sbtn');
const textArea = document.getElementById('text3');

sortButton.addEventListener('click', function() {
    if (sortButton.textContent == 'See More') {
        sortButton.textContent = 'See Less';
        textArea.classList.toggle('text3');
    }
    else{
        sortButton.textContent = 'See More';
        textArea.classList.toggle('text3');
    }
})