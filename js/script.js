window.addEventListener('load', function(){
    let header = document.querySelector('header');
    let navbar = document.querySelector('.navbar');
    let menu = document.querySelector('.menu_burger');
    let menu_smScreen = document.querySelector('.menu_list');
    let contacts = document.querySelector('.contacts');
    let contacts_list = document.querySelector('.contacts_list');

    /* Трансформация меню при скролле */
    document.addEventListener('scroll', function () {
        // console.log (window.pageYOffset);
        if (window.pageYOffset > 170) {
            header.classList.add('darkTheme', 'header_fixed');
            navbar.classList.add('darkTheme');
        } else {
            header.classList.remove('darkTheme', 'header_fixed');
            navbar.classList.remove('darkTheme');
        }
    });

    /* Анимация меню */
    menu.addEventListener('click', function () { 
        if (menu_smScreen.classList.contains('menu_list_active')) {
            let animate = menu_smScreen.animate([
                {transform: 'translateX(0%)'},
                {transform: 'translateX(-200%)'}
            ], {duration: 300});
            animate.addEventListener('finish', function(){
                menu_smScreen.classList.remove('menu_list_active');
            });
        } else {
            if (contacts_list.classList.contains('contacts_list_active')) {
                let animate = contacts_list.animate([
                    {transform: 'translateX(0%)'},
                    {transform: 'translateX(200%)'},
                ], {duration: 200});
                animate.addEventListener('finish', function () {
                    contacts_list.classList.remove('contacts_list_active');
                    callMenu();
                });
            } else {
                callMenu();
            }
        }
    });

    /* Анимация контактов */
    contacts.addEventListener('click', function () {
        if (contacts_list.classList.contains('contacts_list_active')) {
            let animate = contacts_list.animate([
                {transform: 'translateX(0%)'},
                {transform: 'translateX(200%)'},
            ], {duration: 200});
            animate.addEventListener('finish', function(){
                contacts_list.classList.remove('contacts_list_active');
            });
        } else {
            if (menu_smScreen.classList.contains('menu_list_active')) {
                document.querySelector('.ham').classList.remove('active');
                let animate = menu_smScreen.animate([
                    {transform: 'translateX(0%)'},
                    {transform: 'translateX(-200%)'},
                ], {duration: 200});
                animate.addEventListener('finish', function () {
                    menu_smScreen.classList.remove('menu_list_active');
                    callContacts();
                });
            } else {
                callContacts();
            }
        }
    });

    /* Функции управления анимацией */
    function callMenu() {
        menu_smScreen.classList.add('menu_list_active');
        menu_smScreen.animate([
            {transform: 'translateX(-200%)'},
            {transform: 'translateX(0%)'}
        ], {duration: 300});
    }
    function callContacts() {
        contacts_list.classList.add('contacts_list_active');
        contacts_list.animate([
            {transform: 'translateX(200%)'},
            {transform: 'translateX(0%)'}
        ], {duration: 300});
    }
});