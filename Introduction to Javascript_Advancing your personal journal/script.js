const main = document.querySelector('main');
const button = document.querySelector('button')
const journalCount = document.getElementById('journal_count');

let count = document.body.children[3].childElementCount;
let updatedCount = journalCount.textContent = `You have ${count} notes`;

const update = () => {
    let journalHeader = prompt("Enter Date and Title", "05/05/26: Flatbread")
    if (journalHeader != "" && journalHeader != null) {
        let article = document.createElement('article');
        let articleHeader = document.createElement('h2');
        articleHeader.textContent = journalHeader;
        article.appendChild(articleHeader);
        main.insertBefore(article, main.firstElementChild);
        let journalContent = prompt("Write your note");
        if (journalContent != "" && journalContent != null) {
            let articleText = document.createElement('p');
            articleText.textContent = journalContent;
            article.appendChild(articleText);

        }
        count++
        updatedCount = journalCount.textContent = `You have ${count} notes`;
    }


}


button.addEventListener('click', update);
