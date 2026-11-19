


// Rätt svar på frågorna
const rattSvar = {
    fraga1: "A",
    fraga2: "D",
    fraga3: "C",
    fraga4: "B",
    fraga5: "C"
};


// Hämta formuläret
const quizForm = document.getElementById("quizForm");


// När någon klickar på rätta-knappen
quizForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let poang = 0;

    // Gå igenom alla frågor
    for (let fraga in rattSvar) {

        // Hämta användarens svar
        const valtSvar = quizForm.elements[fraga].value;

        // Kontrollera om svaret är rätt
        if (valtSvar === rattSvar[fraga]) {
            poang++;
        }
    }

    // Visa resultatet
    const resultat = document.getElementById("resultat");

    resultat.textContent = "Du fick " + poang + " av 5 poäng!";

    // Visa en personlig kommentar
    if (poang <= 1) {
        resultat.textContent += " Du behöver se om filmerna!";
    } 
    else if (poang <= 3) {
        resultat.textContent += " Du kan bättreS!";
    } 
    else {
        resultat.textContent += " Du är ett riktigt Bridget Jones-proffs!";
    }

});