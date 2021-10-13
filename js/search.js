window.onload=()=>{
    document.querySelector('.dropbtn_click').onclick = ()=>{
      dropdown();
    }
    document.getElementsByClassName('type').onclick = ()=>{
      showMenu(value);
    };
    dropdown = () => {
      var v = document.querySelector('.dropdown-content');
      v.classList.toggle('show');
    }

    showMenu=(value)=>{
      var dropbtn_icon = document.querySelector('.dropbtn_icon');
      var dropbtn_content = document.querySelector('.dropbtn_content');

      dropbtn_icon.innerText = '';
      dropbtn_content.innerText = value;
    }
  }
  window.onclick= (e)=>{
    if(!e.target.matches('.dropbtn_click')){
      var dropdowns = document.getElementsByClassName("dropdown-content");

      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }

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
  }