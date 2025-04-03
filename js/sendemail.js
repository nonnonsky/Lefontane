// Invia email
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("pd5BHjNg_hK-eDQGQ");

    document.getElementById('preventivoForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Mostra un messaggio di invio in corso
        let messaggioConferma = document.getElementById('messaggio-conferma');
        messaggioConferma.textContent = "Invio in corso...";
        messaggioConferma.classList.remove('hidden');

        // Recupera dati dal form
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const struttura = document.getElementById('struttura').value;
        const totaleNottiText = document.getElementById('totale-notti').textContent;
        const match = totaleNottiText.match(/(\d+) notti - (\d+) €/);
        const notti = match ? match[1] : "0";
        const prezzoTotale = match ? match[2] : "0";

        const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            struttura: struttura,
            checkin: checkin,
            checkout: checkout,
            notti: notti,
            prezzoTotale: prezzoTotale + " €",
            adulti: document.getElementById('adulti').value,
            bambini: document.getElementById('bambini').value,
            animali: document.getElementById('animali').value,
            info: document.getElementById('info').value
        };

        // Invia il modulo tramite EmailJS
        emailjs.send("service_7txlbbc", "template_0fnlqhi", formData)
        .then(function(response) {
            console.log("Email inviata con successo!", response);

            // Mostra il messaggio di conferma e nasconde il form
            messaggioConferma.textContent = "Grazie per la sua richiesta! Le risponderemo al più presto. 😊";
            document.getElementById('preventivoForm').reset(); // Resetta il form
            document.getElementById('preventivoForm').style.display = 'none'; // Nasconde il form
        })
        .catch(function(error) {
            console.error("Errore EmailJS:", error);
            messaggioConferma.textContent = "Errore nell'invio della richiesta. Riprova più tardi.";
        });
    });
});
