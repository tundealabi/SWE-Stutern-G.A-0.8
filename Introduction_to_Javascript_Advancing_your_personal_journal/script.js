const main = document.querySelector('main');
const button = document.querySelector('button');
const journalCount = document.getElementById('journal_count');
let count = main.childElementCount;
let updatedCount = journalCount.textContent = `You have ${count} notes`;
const update = () => {
    let journalHeader = prompt("Enter Title");
    if (journalHeader !== "" && journalHeader !== null) { //checks if text was entered into the prompt box or if it was cancelled
        let article = document.createElement('article');
        let articleHeader = document.createElement('h2');
       //setting up the date appearance
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear().toString().slice(2);
        let newDay = (day >= 10) ? day : `0${day}`;
        let newMonth = (month >= 10) ? month : `0${month}`;
        articleHeader.textContent = `${newDay}/${newMonth}/${year}: ${journalHeader}`;
        article.appendChild(articleHeader);
       //inserts new articles at the top of existing articles in the main element(parent)
        main.insertBefore(article, main.firstElementChild);
        let journalContent = prompt("Write your note");
       //the below if statement will not run unless the above if statement is met
        if (journalContent !== "" && journalContent !== null) {
            let articleText = document.createElement('p');
            articleText.textContent = journalContent;
            article.appendChild(articleText);
        } else {
            main.firstElementChild.remove(); //decrease the count by one if there is no entry in one or both of the prompts
            count--;
        }
        count++;
        updatedCount = journalCount.textContent = `You have ${count} notes`; //increase the count if there is entry in both prompts
    }

};
button.addEventListener('click', update); //run the above update function when clicked
