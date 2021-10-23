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
  //dropbox
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

    //slide
    db = [
      {
        imageName:"아무 사진.png",
        content_area:"[제주]",
        content_title:"혼자옵서예"
      },
      {
        imageName:"아무 사진.png",
        content_area:"[서울]",
        content_title:"어서오세요"
      },
      {
        imageName:"아무 사진.png",
        content_area:"[제주]",
        content_title:"혼자옵서예"
      }
    ]
  }

//slide 선언
class Slide_content {
  imageName = "../img/";
  content_area;
  content_title;
  constructor(
    imageName,
    content_area,
    content_title
  ){
    this.imageName += imageName;
    this.content_area = content_area;
    this.content_title = content_title;
  }
  getElement = function() {
    let slideContent = document.createElement("div");
    let content_background = document.createElement("div");
    let content_discription = document.createElement("div");
    let content_heart = document.createElement("div");
    let content_area = document.createElement("span");
    let content_title = document.createElement("span");

    slideContent.className = "slide_content";
    content_background.className = "content_background";
    content_background.style.backgroundImage = "url('"+this.imageName+"')";
    content_discription.className = "content_discription";
    content_heart.className = "content_heart";
    content_area.className = "content_area";
    content_title.className = "content_title";

    content_background = this.content_background;
    content_heart = this.content_heart;

    content_discription.appendChild(content_heart);
    content_discription.appendChild(content_background);
    content_discription.appendChild(content_area);
    content_discription.appendChild(content_title);

    slideContent.appendChild(content_background);
    slideContent.appendChild(content_discription);

    return slideContent;

  };
}