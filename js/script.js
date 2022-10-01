
const cover=document.querySelector(".cover");

 function show(){
       cover.style.display="block";
       
 } 

 function remove(){
    cover.style.display="none";
} 




    // var icon = document.getElementById("icon");
    // icon.onclick = function () {
    //     document.body.classList.toggle("dark-mode");
    //     if (document.body.classList.contains("dark-mode")) {
    //         icon.src = "assets/sun.png";
    //     } else {
    //         icon.src = "assets/moon.png";
    //     }
    // }

    function darkmode(){
        let setTheme = document.body;
        setTheme.classList.toggle('dark-mode')
        let theme;
        if(setTheme.classList.contains("dark-mode")){
            console.log("Dark mode");
            theme = "DARK";
        }else{
            console.log("Light mode");
            theme = "LIGHT";
        }
        localStorage.setItem("PageTheme", JSON.stringify(theme));

        if(setTheme.classList.contains('dark-mode')){
            document.querySelector('.fa-toggle-off').style.display='none'
            document.querySelector('.fa-toggle-on').style.display='block'
        }
        else{
            document.querySelector('.fa-toggle-on').style.display='none'
            document.querySelector('.fa-toggle-off').style.display='block'
        }
    }
    
    // setInterval(() => {
        let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
        console.log(GetTheme);
        if(GetTheme === "DARK"){
            document.body.classList = "dark-mode";
        }else{
            document.body.classList = "";
        }
    // }, 5);

    // function check(){
    //     setTheme = document.body;
       
    // }
   let setThe = document.body;
    if(setThe.classList.contains('dark-mode')){
        document.querySelector('.fa-toggle-off').style.display='none'
        document.querySelector('.fa-toggle-on').style.display='block'
    }
    else{
        document.querySelector('.fa-toggle-on').style.display='none'
        document.querySelector('.fa-toggle-off').style.display='block'
    }

  window.addEventListener('scroll', function(){
      let header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY>0)
  })
    