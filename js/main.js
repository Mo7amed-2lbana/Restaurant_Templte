let navBar = document.querySelector("header nav");
let lists = document.querySelectorAll("header nav .nav-bar li a");
let myTop = document.querySelector("header .top");
let menuFilter = document.querySelectorAll('.menu .menu-filter ul li');
let menuText = document.querySelectorAll('.menu .menu-texts div');
let myAbout = document.querySelector("#about .container");
let myMenu = document.querySelector("#menu .container");

// active class 
    lists.forEach((a)=>{
        a.onclick = () => {
            lists.forEach((a)=>{
                a.classList.remove("active");
            });
            a.classList.add("active");
        }
    });

    window.onscroll = function(){
        console.log(window.scrollY);
        // fixed navbar by scroll 
        if(window.scrollY >= 200){
            navBar.style.top = 0;
            navBar.style.background = "rgba(0,0,0,.7)";
            navBar.style.borderBottom = '1px solid #37332a';
            myTop.style.opacity = 1;
        }else{
            navBar.style.top = "40px";
            navBar.style.background = "rgba(0,0,0,.5)";
            navBar.style.borderBottom = '1px solid transparent';
            myTop.style.opacity = 0;
        }     
    
        // home 
        if(window.scrollY <200){
            lists.forEach((a)=>{
                a.classList.remove("active");
                if(a.dataset.scroll === "home"){
                    a.classList.add("active");
                }
            });

        // about
        }else if(window.scrollY > 200 && window.scrollY < 1900){
            lists.forEach((a)=>{
                a.classList.remove("active");
                if(a.dataset.scroll === "about"){
                    a.classList.add("active");
                }
            
            
        });
        
        // menu
        }else if (window.scrollY > 1900 && window.scrollY < 2800){
            lists.forEach((a)=>{
                a.classList.remove("active");
                if(a.dataset.scroll === "menu"){
                    a.classList.add("active");
                }
            });

        // specials
        }else if (window.scrollY > 2800 && window.scrollY < 3500 ){
        lists.forEach((a)=>{
            a.classList.remove("active");
            if(a.dataset.scroll === "specials"){
                a.classList.add("active");
            }
        })
    
        //featuers
        }else if (window.scrollY > 3500 && window.scrollY < 4300){
            lists.forEach((a)=>{
                a.classList.remove("active");
                if(a.dataset.scroll === "gallary"){
                    a.classList.add("active");
                }
            });
        //chef
        }else if (window.scrollY > 4300 && window.scrollY < 5000){
            lists.forEach((a)=>{
                a.classList.remove("active");
                if(a.dataset.scroll === "chef"){
                    a.classList.add("active");
                }
            });

        } 
        // //contact
        // }else if (window.scrollY > ){
        //     lists.forEach((a)=>{
        //         a.classList.remove("active");
        //         if(a.dataset.scroll === "contact"){
        //             a.classList.add("active");
        //         }
        //     })
   
    }





//add active to menu filter 
menuFilter.forEach((li) => {
    li.onclick = () => {
        menuFilter.forEach((li) => {
            li.classList.remove("active");
        });
        li.classList.add("active");

        console.log(li.innerText );
        
        // choose imges
        if(li.innerText === "All"){
            menuText.forEach((div)=>{
                div.classList.add("active");
            });


        }
        else if(li.innerText === "Starters"){
            menuText.forEach((div)=>{

                // remove active class 
                div.classList.remove("active");

                // add class active
                if(div.dataset.filter === "starters"){
                    div.classList.add("active");
                
                }
            });    
        }else if(li.innerText === "Salads"){
            menuText.forEach((div)=>{

                // remove active class 
                div.classList.remove("active");

                // add class active
                if(div.dataset.filter === "salads"){
                    div.classList.add("active");
                
                }
            });    
        }else if(li.innerText === "Specialty"){
            menuText.forEach((div)=>{

                // remove active class 
                div.classList.remove("active");

                // add class active
                if(div.dataset.filter === "specialty"){
                    div.classList.add("active");
                
                }
            });    
        }
                
    }
});


    
// specials-nav 
let specialNav = document.querySelectorAll(".specials-menu .specials-nav ul li");
let specialText = document.querySelectorAll(".specials-menu .specials-text div");
console.log(specialText);
    specialNav.forEach((li)=>{
        li.onclick = function(){
            specialNav.forEach((li)=>{
                li.classList.remove("active");
            });
            li.classList.add("active");

            specialText.forEach((div)=>{
       
                // first 
                if(li.innerText === "Modi sit est"){
                    div.classList.remove("active");
                    if(div.dataset.special === "first"){
                        div.classList.add("active");
                    }  
                    
                // secound 
                } else if(li.innerText === "Unde praesentium sed"){
                    div.classList.remove("active");
                    if(div.dataset.special === "secound"){
                      div.classList.add("active");
                    }  
                
                // three 
                }else if(li.innerText === "Pariatur explicabo vel"){
                    div.classList.remove("active");
                    if(div.dataset.special === "three"){
                        div.classList.add("active");
                    }
                
                // four 
                }else if(li.innerText === "Nostrum qui quasi"){
                    div.classList.remove("active");
                    if(div.dataset.special === "four"){
                        div.classList.add("active");
                    }
                
                // five 
                }else if(li.innerText === "Iusto ut expedita aut"){
                    div.classList.remove("active");
                    if(div.dataset.special === "five"){
                        div.classList.add("active");
                    }             
                }
            });

        }
    });