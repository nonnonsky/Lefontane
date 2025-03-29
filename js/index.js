document.addEventListener("DOMContentLoaded", function () {
    // Seleziona gli elementi della pagina
    let header = document.querySelector(".header");  // Intestazione della pagina
    let footer = document.querySelector(".footer");  // Piè di pagina
    let splash = document.getElementById("splash");  // Schermata iniziale di benvenuto
    let content = document.getElementById("content");  // Contenuto principale della pagina
    let logo = document.getElementById("logo");  // Logo nella schermata iniziale

    // Assicura che il contenuto principale sia inizialmente nascosto
    if (content) {
        content.style.display = "none";  // Nasconde il contenuto
        content.style.opacity = "0";  // Imposta opacità a 0 per una transizione fluida
    }
    if (header) header.style.opacity = "0";  // Nasconde l'intestazione
    if (footer) footer.style.opacity = "0";  // Nasconde il piè di pagina

    // Dopo 500 ms, inizia la transizione dello sfondo e del colore del testo
    setTimeout(() => {
        document.body.style.opacity = "0";  // Imposta l'opacità a 0 per una transizione di sfumatura

        setTimeout(() => {
            // Cambia lo sfondo e il colore del testo dopo 2 secondi
            document.body.style.background = "#f0f0f0";
            document.body.style.color = "black";
            document.body.style.opacity = "1";  // Riporta l'opacità a 1
        }, 2000);

        // Dopo 2,5 secondi, nasconde il logo dello splash screen
        setTimeout(() => {
            if (logo) logo.style.opacity = "0";
        }, 2500);

        // Dopo 3 secondi, nasconde lo splash screen e mostra il contenuto principale
        setTimeout(() => {
            if (splash) {
                splash.style.opacity = "0";  // Svanisce lo splash screen
                setTimeout(() => {
                    splash.style.display = "none";  // Nasconde completamente lo splash screen

                    if (content) {
                        content.style.display = "block";  // Mostra il contenuto principale
                        setTimeout(() => {
                            content.style.opacity = "1";  // Aumenta l'opacità per una transizione fluida
                            if (header) header.style.opacity = "1";  // Mostra l'intestazione
                            if (footer) footer.style.opacity = "1";  // Mostra il piè di pagina
                        }, 500);
                    }
                }, 500);
            }
        }, 3000);

    }, 500);
});
