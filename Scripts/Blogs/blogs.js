let sortButton1 = document.querySelector('.sbtn1');
let sortButton2 = document.querySelector('.sbtn2');
let sortButton3 = document.querySelector('.sbtn3');
let sortedText1 = document.getElementById('text1');
let sortedText2 = document.getElementById('text2');
let sortedText3 = document.getElementById('text3');

sortButton1.addEventListener('click', () => {
    if(sortButton1.textContent == 'See More'){
        sortButton1.textContent = 'See Less';
        sortedText1.classList.toggle('text1');
    }
    else if(sortButton1.textContent == 'See Less'){
        sortButton1.textContent = 'See More';
        sortedText1.classList.toggle('text1');
    }
})
sortButton2.addEventListener('click', () => {
    if(sortButton2.textContent == 'See More'){
        sortButton2.textContent = 'See Less';
        sortedText2.classList.toggle('text2');
    }
    else if(sortButton2.textContent == 'See Less'){
        sortButton2.textContent = 'See More';
        sortedText2.classList.toggle('text2');
    }
})
sortButton3.addEventListener('click', () => {
    if(sortButton3.textContent == 'See More'){
        sortButton3.textContent = 'See Less';
        sortedText3.classList.toggle('text3');
    }
    else if(sortButton3.textContent == 'See Less'){
        sortButton3.textContent = 'See More';
        sortedText3.classList.toggle('text3');
    }
})