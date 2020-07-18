
let nav = document.querySelectorAll(".nav-js"); //select the links : home,about,educationand skills

nav.forEach(list =>{
 list.addEventListener('click',()=>{  
     nav.forEach(list2 =>{   //just like a nested For-loop, check the current item with all other items
         list !== list2 ? list2.classList.remove('active') : list.classList.add('active');     
     })
 })
    
});

