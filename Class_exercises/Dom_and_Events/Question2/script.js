  document.addEventListener("DOMContentLoaded",function(){
            let heading = document.getElementById("change_heading");
             heading.textContent = "Hello World!";
             let span = document.querySelector(".selected");
             let section = document.querySelector("section");
    
        section.addEventListener("mouseover",(e) => span.textContent = `${e.target.classList}`.toUpperCase());

                    //OR
        
            // for(let child of section.children){
            //     child.addEventListener("mouseover",() => span.textContent = `${child.classList}`.toUpperCase());
            // }

             let purpleDiv = document.createElement("div");
             purpleDiv.classList.add("purple");
             section.appendChild(purpleDiv);
            

//PART 2
          let startButton = document.querySelector("button");
          startButton.addEventListener("click",()=>{
           let pageWidth = document.body.offsetWidth;
            
           let carDrive = [{transform: `translate(${pageWidth-50}px,0)`}];
           let car1Duration = Math.floor(Math.random() * (3500 - 3000 + 1)) + 3000;
           let car2Duration = Math.floor(Math.random() * (3500 - 3000 + 1)) + 3000;

            document.querySelector(".car1").animate(
              carDrive, 
              {duration: car1Duration}
);
            document.querySelector(".car2").animate(
              carDrive, 
              {duration: car2Duration}

);
            startButton.disabled = true;

         setTimeout(()=>{
            if (car1Duration < car2Duration) {
                alert("Car 1 is the winner");
              }else{
                alert("Car 2 is the winner");
              }
               startButton.disabled = false;
         },3550)
            
        })

        })
