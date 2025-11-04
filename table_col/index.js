//Table

/**
 * @type {{author:string, era:string, love1:string, love2:string}[]}
 */
const arr = [
    {
        author: "Balassi Bálint",
        era: "reformáció",
        love1: "Losonczy Anna",
        love2: "Dobó Krisztina"
    },
    {
        author: "Csokonai Vitéz Mihály",
        era: "felvilágosodás",
        love1: "Vajda Juliána",
    },
    {
        author: "Petőfi Sándor",
        era: "magyar romantika",
        love1: "Mednyánszky Berta",
        love2: "Szendrey Júlia"
    },
    {
        author: "Ady Endre",
        era: "20. század",
        love1: "Léda",
        love2: "Csinszka"
    }
];

const table = document.createElement("table");
document.body.appendChild(table);

//Thead 
const thead = document.createElement("thead");
const tr = document.createElement("tr");

table.appendChild(thead);
thead.appendChild(tr);

createCell("th", "Szerzők", tr);
createCell("th", "Korszak", tr);
const builtDifferent1 = createCell("th", "Szerelmek", tr)

builtDifferent1.colSpan = 2;

//Tbody
const tbody = document.createElement("tbody");

table.appendChild(tbody)

for(let i = 0; i < arr.length; i++){
    const tr = document.createElement("tr");

    createCell("td", arr[i].author, tr)
    createCell("td", arr[i].era, tr)
    const builtDifferent2 = createCell("td", arr[i].love1, tr)

    if(!arr[i].love2){
        builtDifferent2.colSpan = 2;
    }
    else{
        createCell("td", arr[i].love2, tr)
    }

    tbody.appendChild(tr);
}

/**
 * 
 * @param {string} cellType Lehet "th" vagy "td" 
 * @param {string} cellContent A cella tartalma
 * @param {HTMLTableRowElement} parentRow A sor amihez hozzáadunk
 * 
 * @returns {HTMLTableCellElement} //Visszatérünk a létrehozott cella elementtel, hogy később tudjuk módosítani a tulajdonságait
 */
function createCell(cellType, cellContent, parentRow){
    const cella = document.createElement(cellType);
    cella.innerText = cellContent;
    parentRow.appendChild(cella);
    return cella;
}


//Form
 
/**
 *
 * @param {HTMLFormElement} form - A form elem, amihez hozzáadjuk
 * @param {string} id - Az input id-je és name-je
 * @param {string} labelText - A label felirata
 */
function createField(form, id, labelText) {
    const label = document.createElement("label");
    label.htmlFor = id;
    label.innerText = labelText;
    form.appendChild(label);
    form.appendChild(document.createElement("br"));
 
    const input = document.createElement("input");
    input.type = "text";
    input.id = id;
    input.name = id;
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
}
 
// ─────────────── Form létrehozása ───────────────
const form = document.createElement("form");
form.id = "form_js";
 
// Címsor (az első label elé kerül)
const h2 = document.createElement("h2");
h2.innerText = "Javascript form";
form.appendChild(h2);
 
// Mezők létrehozása segédfüggvénnyel
createField(form, "kolto_nev", "Költő neve:");
createField(form, "korszak", "Korszak:");
createField(form, "szerelem1", "Szerelme:");
createField(form, "szerelem2", "Szerelme:");
 
// Gomb hozzáadása
const button = document.createElement("button");
button.innerText = "Hozzáadás";
form.appendChild(button);
 
// Az egészet a dokumentumhoz adjuk
document.body.appendChild(form);