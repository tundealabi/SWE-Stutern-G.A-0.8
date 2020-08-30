
$(()=>{
     //display items in the localStorage when the dom loads
     UI.displayLists();
     
     //add event listener to the sort buttons
    $("#sort-rating").on('click',()=>{
         Favourite.sortListByRating();
    })
    $("#sort-title").on('click',()=>{
         Favourite.sortListByTitle();
    })
    
})

//set a default value for the sortListByRating method
let sortTitle = false;
let sortRating = false;


class Favourite {
    constructor(title,rating,id){
        this.title = title;
        this.rating = rating;
        this.id = id;
    }
       //method for sorting by rating
      static sortListByRating(){
          //clear the innerHtml of tbody for re-rendering
          $("tbody").empty();
        if(sortRating){
            //render the item from the localStorage
            JSON.parse(localStorage.getItem("list")).sort((a,b)=>b.rating - a.rating).forEach(item=>UI.addfavToList(item));
            //add event listener to the delete btn of each list item
            $(".delete-btn").on('click',(e)=> UI.deleteFavFromList($(e.target)));
        }else{
            JSON.parse(localStorage.getItem("list")).sort((a,b)=> a.rating - b.rating).forEach(item=>UI.addfavToList(item));
            $(".delete-btn").on('click',(e)=> UI.deleteFavFromList($(e.target)));
        }
        //switch the value of sortRating
        sortRating = !sortRating;
    }
     //method for sorting by title
        static sortListByTitle(){
            $("tbody").empty();
        if(sortTitle){
                // sort by name
        JSON.parse(localStorage.getItem("list")).sort(function(a, b) {
            let titleA = a.title.toLowerCase(); // ignore upper and lowercase
            let titleB = b.title.toLowerCase(); // ignore upper and lowercase
              if (titleA > titleB) {
               return -1;
           }
               if (titleA < titleB) {
                   return 1;
            }
           // names must be equal
           return 0;
     }).forEach(item=>UI.addfavToList(item));
     //add event listener to the delete btn of each list item
     $(".delete-btn").on('click',(e)=> UI.deleteFavFromList($(e.target)));
        }else{
            // sort by name
        JSON.parse(localStorage.getItem("list")).sort(function(a, b) {
         let titleA = a.title.toLowerCase(); // ignore upper and lowercase
         let titleB = b.title.toLowerCase(); // ignore upper and lowercase
           if (titleA < titleB) {
            return -1;
        }
            if (titleA > titleB) {
                return 1;
         }
        // names must be equal
        return 0;
  }).forEach(item=>UI.addfavToList(item));
  $(".delete-btn").on('click',(e)=> UI.deleteFavFromList($(e.target)));
        }
        sortTitle = !sortTitle;
    }
}


 class UI {
     //method for displaying list items from localstorage
    static displayLists() {
        const favList = FavListStore.getFavList();
         //iterate over itmes in the storage array
        favList.forEach(list=> UI.addfavToList(list));
        $(".delete-btn").on('click',(e)=> UI.deleteFavFromList($(e.target)));
    }
    //method for diplaying the items on the page
    static addfavToList(list) {
        const $favList = $("<tr>");
        $favList.html(`
        <td>${list.title}</td>
        <td>${list.rating}</td>
        <td><button type="button" class="btn btn-danger btn-sm btn-block delete-btn">Delete</button></td>
        `);
        $($favList).data("id", `${list.id}`);
        $("tbody").append($favList);
    }
    //method for removing the item from the document and from the storage
    static deleteFavFromList(element){
        var ele = element.parent().parent();
        FavListStore.removeFromStore(ele.data("id"));
        ele.remove();
    }
    //alert method
    static alertMsg(msg,type){
        $("h1").after($(
            `<div class="alert alert-${type}" role="alert">
            ${msg}
          </div>`
        ))
        setTimeout(()=>{
            $(".alert").remove();
        },1000)      
    }
}

//local storage class
class FavListStore {
    //get items from local storage
    static getFavList(){
        return localStorage.getItem("list")
        ? JSON.parse(localStorage.getItem("list"))
          : [];
    }
    //add items to local storage
    static addToStore(favItem){
        const item = FavListStore.getFavList();
        item.push(favItem);
        localStorage.setItem("list",JSON.stringify(item));
    }
    //remove items from local storage
    static removeFromStore(id){
         let item = FavListStore.getFavList();
         item = item.filter(lists=> lists.id !== id);
        localStorage.setItem("list",JSON.stringify(item))
    }
}

//Event : add a favorite movie
//add listener on the add button
$("#add-btn").on('click',()=>{
    let $titleValue = $("#title-input");
    let $ratingValue = $("#rating-input");
    //generate a unique I.D for each item added to the list for easy identification
    const id = new Date().getTime().toString();
    //validate
    if($titleValue.val() && $ratingValue.val() <= 10 && $ratingValue.val() >= 1){
       
        //instantiate favoutite movie
        let movie = new Favourite($titleValue.val(),$ratingValue.val(),id);

        //call method to add entered item to the page
        UI.addfavToList(movie);

        //add entered item to store
        FavListStore.addToStore(movie);
       //reset the input value after each add button click
        $titleValue.val("");
        $ratingValue.val("");
    }else{
        UI.alertMsg("Inputs must be filled", "danger");
    }
})





