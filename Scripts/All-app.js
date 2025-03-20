const menuBar = document.querySelector('#UL-container');
const menuButton = document.querySelector('#Menubar-icon');
const main = document.querySelector('.main_body-items')
const hideButton = document.getElementById('sidebar-hide');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.getElementById('content');
menuButton.addEventListener('click', () => {
        menuBar.classList.toggle('hidden-menubar');
        // menuBar.classList.remove('hidden-menubar');
})
main.addEventListener('click', () => {
        menuBar.classList.add('hidden-menubar'); 
        // added to close the menu after clicking on a main body item. This is just a workaround as the menu should remain open when clicked on a submenu item.
        
});

hideButton.addEventListener('click', () => {
        sidebar.classList.toggle('hidden-sidebar');
        // sidebar.classList.remove('hidden-sidebar');
        hideButton.classList.toggle('sidebar_show');
        hideButton.style.transform.toggle = 'rotate(180deg)';
        mainContent.classList.toggle('content_holder-full');
        hideButton.classList.toggle("fa-circle-chevron-right");
        hideButton.classList.toggle("fa-circle-chevron-left");       
})
