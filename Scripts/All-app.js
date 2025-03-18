const menuBar = document.querySelector('#UL-container');
const menuButton = document.querySelector('#Menubar-icon');
const main = document.querySelector('.main_body-items')
menuButton.addEventListener('click', () => {
        menuBar.classList.toggle('hidden-menubar');
        // menuBar.classList.remove('hidden-menubar');
})
main.addEventListener('click', () => {
        menuBar.classList.add('hidden-menubar'); 
        // added to close the menu after clicking on a main body item. This is just a workaround as the menu should remain open when clicked on a submenu item.
        
});