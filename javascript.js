let uppgifterKlar = document.querySelector("#klarText");
let avklarat = 0;
let array = [];
let nummer = 0;
let textInput = document.querySelector("text");
let error = document.querySelector("#errorText");
let ulListan = document.querySelector("ul");


document.querySelector("#knapp"); // "Lägg till" knappen har en Onclick i HTML - Funktionen är nedanför

function skapaFunktion() {
    if (text.value == 0) { // Om textfältet är tomt, skriv ut error texten som står under, annars fortsätter den neråt
        error.innerText = "Du måste skriva något först!";
        return;
    }
    error.innerText = ""; // Ta bort error texten och fortsätt
    array.push({ inputText: text.value }); // Spara texten som du skrivit in i textrutan i en array under InputText:

    let li = document.createElement("li"); // Skapa en li inne i ul med appendChild 
    ulListan.appendChild(li);

    let uppgift = document.createElement("span"); // Skapa variabeln uppgift med span för att skriva ut den texten
    li.appendChild(uppgift);
    uppgift.innerText = array[nummer].inputText; // Här får varje uppgift ett nummer och med den text man skrivit i textfältet från array
    nummer++;
    text.value = ""; //Töm textfältet i input 
    console.log(array); // Skriv ut arrayen i console för att kontrollera att den fick ett nummer och sin text

    uppgift.addEventListener("click", () => { // Tryck på uppgifts texten för att markera dom som avklarade
        if (uppgift.getAttribute("class", "avklarad")) { // Om den redan är avklarad när man klickar, ta bort class .avklarad och visa ej line-through
            uppgift.setAttribute("class", "");
            avklarat--; // Substrahera från avklarat
        } else {
            uppgift.setAttribute("class", "avklarad"); // Annars tillge class .avklarad och line-through
            avklarat++; // Addera till avklarat
        }
        uppgifterKlar.innerText = avklarat + " uppgifter avklarade"; // Ändra text på #klartext paragrafen till detta
    });

    let taBort = document.createElement("span"); // Skapa variabeln taBort för att lägga till delete-ikon och kunna ta bort li med uppgift
    taBort.innerHTML = "&#9746;"; // Delete-ikon som text
    taBort.setAttribute("class", "tabort"); // Skapa en class .tabort - styling finns i styling.css
    li.appendChild(taBort); // Ta fram Delete ikonen för varje li

    taBort.addEventListener("click", () => { // Klicka på delete ikonen för att ta bort li
        li.remove();
    });
}