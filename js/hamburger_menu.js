window.onload=()=>{
    const menuTrigger = document.querySelector('.menu_trigger');
    const menuWrap = document.querySelector(".menu_wrap");
    menuTrigger.addEventListener('click', (event)=> {
        event.currentTarget.classList.toggle('active')
        if(menuWrap.classList.contains("on")) {
            menuWrap.classList.remove("on");
        }
        else {
            menuWrap.classList.add("on");
        }
    });

    const showDropdown = document.querySelector(".dropdown_menu").classList.toggle("show");
    showDropdown.addEventListener('onClick', (event) =>{
        if(!event.target.matches('.dropdown_btn')){
            let dropdowns = document.querySelector(".dropdown_menu");
            let i;
            for(int = 0; i <dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if(openDropdown.classList.contains("show")){
                    openDropdown.classList.remove("show");
                }
            }
        }
    });
    
}