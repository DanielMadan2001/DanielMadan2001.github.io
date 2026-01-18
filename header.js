const pageNames = [ "ABOUT ME", "WORK EXPERIENCE", "CODING EXPERIENCE", "GAME PORTFOLIO",
    "SOCIAL MEDIA & MARKETING", "SOUNDTRACKS", "", ""
 ];
const pageLinks = [ "index", "work_experience", "coding_experience", "game_portfolio",
    "social_media_marketing", "music", "", ""
 ];

const headerDiv = document.getElementById('header');
setHeader();

function setHeader() {
    // BG IMAGE
    headerDiv.style.backgroundImage = `url("images/headerBG${headerDiv.dataset.headerbg}.png")`;

    // LOGO
    const logoImage = document.createElement('article');
    logoImage.innerHTML = `<img class="logo" src="images/logo${headerDiv.dataset.headerbg}.gif">`;
    headerDiv.append(logoImage);

    // HEADER TABLE
    const headerTable = document.createElement('table');
    headerTable.classList.add("headerTable");

    for (let i = 0; i < pageNames.length/4; i++) { 
        const headerTableRow = document.createElement('tr');
        for (let j = 0; j < 4; j++) {
            const itemIndex = (i * 4) + j;
            const newTH = document.createElement('th');
            newTH.innerHTML = pageNames[itemIndex];
            let tablePointCurrent = itemIndex == (headerDiv.dataset.headerbg - 1);
            if (tablePointCurrent && !!headerDiv.dataset.hascurrent) {
                tablePointCurrent = tablePointCurrent && headerDiv.dataset.hascurrent != "false";
            }
            if (tablePointCurrent) {
                newTH.classList.add("headerTablePointCurrent");
            }
            else {
                newTH.innerHTML = `<a href = ${pageLinks[itemIndex]}>` + newTH.innerHTML + `</a>`;
                newTH.classList.add("headerTablePoint");
            }
            headerTableRow.append(newTH);
        }
        headerTable.append(headerTableRow);
    }
    headerDiv.append(headerTable);
}