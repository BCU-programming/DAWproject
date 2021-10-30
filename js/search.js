window.onload=()=>{
  db = [
    {
      imageName:"아무 사진.JPG",
      content_area:"[서울]",
      content_title:"어서오세요"
    },
    {
      imageName:"아무 사진.JPG",
      content_area:"[제주]",
      content_title:"혼자옵서예"
    },
    {
      imageName:"아무 사진.JPG",
      content_area:"[인천]",
      content_title:"어서오세요"
    },
    {
      imageName:"아무 사진.JPG",
      content_area:"[인천]",
      content_title:"어서오세요"
    },
    {
      imageName:"아무 사진.JPG",
      content_area:"[인천]",
      content_title:"어서오세요"
    },
    {
      imageName:"아무 사진.JPG",
      content_area:"[인천]",
      content_title:"어서오세요"
    }
  ]
  // dropbox
    // document.querySelector('.dropbtn_click').onclick = ()=>{
    //   dropdown();
    // }
    // document.getElementsByClassName('type').onclick = ()=>{
    //   showMenu(value);
    // };
    // dropdown = () => {
    //   var v = document.querySelector('.dropdown-content');
      
    //     v.classList.toggle('show');
  
    // }

    let dropdown_content = document.getElementsByClassName("dropdown-content")[0]
    dropdown_content.style.visibility = "hidden";
    let v = document.querySelector('.dropbtn_click');
    v.onclick = () =>{
      if(dropdown_content.style.visibility == "hidden") {
        dropdown_content.style.visibility = "visible"
      }else{
        dropdown_content.style.visibility = "hidden"
      }
    }

    showMenu=(value)=>{
      var dropbtn_icon = document.querySelector('.dropbtn_icon');
      var dropbtn_content = document.querySelector('.dropbtn_content');

      dropbtn_icon.innerText = '';
      dropbtn_content.innerText = value;
      dropdown_content.style.visibility = "hidden"
    }
    let parent_slide = document.getElementsByClassName("slide_contents")[0];
     let foo;
     for(let i = 0; i < db.length; i++) {
       foo = new Slide_content(db[i].imageName,db[i].content_area,db[i].content_title)
       parent_slide.prepend(foo.getElement());
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
    
    console.log(db);
  }

//slide 선언
class Slide_content {
  imageName = "../imgs/";
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
    let content_img = document.createElement("img");
    let content_discription = document.createElement("div");
    let content_heart = document.createElement("img");
    let content_area = document.createElement("span");
    let content_title = document.createElement("span");

    content_img.setAttribute("src",this.imageName);
    slideContent.className = "slide_content";
    content_img.className = "content_background";
    content_background.style.backgroundImage = "url('"+this.imageName+"')";
    content_discription.className = "content_discription";
    content_heart.className = "content_heart";
    content_area.className = "content_area";
    content_title.className = "content_title";
    content_heart.setAttribute("src","../imgs/빈하트.png")
    content_area.textContent = this.content_area;
    content_title.textContent = this.content_title
    

    content_discription.appendChild(content_heart);
    content_discription.appendChild(content_background);
    content_discription.appendChild(content_area);
    content_discription.appendChild(content_title);

    slideContent.appendChild(content_background);
    slideContent.appendChild(content_img);
    slideContent.appendChild(content_discription);
    
    return slideContent;

  };
}

//let c = new Slide_content(db[])