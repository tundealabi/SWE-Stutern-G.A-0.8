
class MoodChanger {
    constructor(){
        this.store = Redux.createStore(this.rootReducer.bind(this));
        this.displayTag = document.getElementById("face");
        this.displayFace(this.getStore().mood);
    }
    moodChanger(mood)  {
        switch(mood){
            case "sad":
                return {mood: "(   ͡°╭╮ʖ   ͡°)"};
            case "happy":
                return {mood: "✧♡(◕‿◕✿)"};
            case "angry":
                return {mood: "ლಠ益ಠ)ლ"};
            case "confused":
                return {mood: "¯\(°_o)/¯"};
            default:
                return {mood: "(◣◢)ψ"};
        }
    }
    rootReducer(state=this.moodChanger(),action) {
        switch(action.type){
            case "change_mood":
                return this.moodChanger(action.payload);
            default:
                return state;
        }
    }
    getStore(){
        console.log(this.store.getState());
        return this.store.getState();
    }
    addStore(mood){
        console.log(this.store.dispatch({
            type: "change_mood",
            payload: mood
        }));
        this.displayFace(this.getStore().mood);
    }
    displayFace(face){
        this.displayTag.innerText = face;
    }
}

const mood = new MoodChanger();

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>mood.addStore(btn.getAttribute("id"))));
})

