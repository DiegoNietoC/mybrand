document.getElementById('menuButton').onclick = displayMenu;
document.getElementById('menu').setAttribute('class', 'menu_off');
let isActive = false;

function displayMenu(){
    if(isActive){
        document.getElementById('menu').setAttribute('class', 'menu_off');
        isActive = false;
        console.log(isActive);
    } else {
        document.getElementById('menu').setAttribute('class', 'menu_on');
        isActive = true;
        console.log(isActive);
    }
}