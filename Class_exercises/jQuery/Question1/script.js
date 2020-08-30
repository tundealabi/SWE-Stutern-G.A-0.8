
//1.
$(document).ready(function(){
 	console.log("Let's get ready to party with jQuery!");
  })
  
$(function(){
//2.
	$("img").addClass("image-center");
  
  //3.
	$("article").find("p").eq(length -1).remove();
  
  //4.
	$("#title").css("font-size",`${Math.floor(Math.random() * 101)}px`);
  
  //5.
	let $li = $("<li>",{
		text: "Hello World!!",
		css: {
			color: "green",
		}
	})
	$("ol").append($li);

//6.
	$("aside").empty().append($("<p>",{
		text:"We don't really care"
	}));

//7.
   $("img").on("click",function(){
   	    this.remove();
   })

//8.
    $("input").on("change",function(){
    	let $red = $("input").eq(0).val();
        let $blue = $("input").eq(1).val();
        let $green = $("input").eq(2).val();

         $("body").css("background-color",`rgb(${$red},${$green},${$blue})`)
    })

   

});
