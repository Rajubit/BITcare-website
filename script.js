let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classlist.toggle('fa-times');
    navbar.classlist.toggle('active');
}

menu.scroll = () =>{
    menu.classlist.remove('fa-times');
    navbar.classlist.remove('active');
}
