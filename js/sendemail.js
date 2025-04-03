document.addEventListener("DOMContentLoaded", function() {
    // Inizializza EmailJS con il Public Key
    emailjs.init("pd5BHjNg_hK-eDQGQ");

    document.getElementById('preventivoForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // Recupero i dati dal modulo
        var formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefono: document.getElementById('telefono').value,
            struttura: document.getElementById('struttura').value,
            checkin: document.getElementById('checkin').value,
            checkout: document.getElementById('checkout').value,            
            adulti: document.getElementById('adulti').value,
            bambini: document.getElementById('bambini').value,
            animali: document.getElementById('animali').value,
            info: document.getElementById('info').value
        };

        // Invia l'email tramite EmailJS
        emailjs.send("service_7txlbbc", "template_0fnlqhi", formData)
        .then(function(response) {
            console.log("Email inviata con successo!", response);
            document.getElementById('messaggio-conferma').classList.remove('hidden');
        })
        .catch(function(error) {
            console.error("Errore EmailJS:", error);
            alert("Errore nell'invio del modulo: " + (error.text || JSON.stringify(error)));
        });
    });
});
