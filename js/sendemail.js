// Calcolo delle notti
document.getElementById('checkin').addEventListener('change', calcolaNotti);
document.getElementById('checkout').addEventListener('change', calcolaNotti);

function calcolaNotti() {
    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;

    if (checkin && checkout) {
        var diffTime = new Date(checkout) - new Date(checkin);
        var diffDays = diffTime / (1000 * 3600 * 24);
        document.getElementById('totale-notti').innerText = diffDays + " notti";
    }
}

// Invia il modulo tramite emailJS

document.getElementById('preventivoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Recupero i dati dal modulo
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var struttura = document.getElementById('struttura').value;
    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;
    var adulti = document.getElementById('adulti').value;
    var bambini = document.getElementById('bambini').value;
    var animali = document.getElementById('animali').value;
    var info = document.getElementById('info').value;

    // Utilizzo emailJS per inviare la richiesta
    emailjs.init("pd5BHjNg_hK-eDQGQ");  // Usa il tuo user_id qui

    emailjs.send('service_7txlbbc', 'template_0fnlqhi', {
        nome: nome,
        email: email,
        telefono: telefono,
        struttura: struttura,
        checkin: checkin,
        checkout: checkout,
        adulti: adulti,
        bambini: bambini,
        animali: animali,
        info: info
    }).then(function(response) {
        // Mostra il messaggio di conferma
        document.getElementById('messaggio-conferma').classList.remove('hidden');
    }, function(error) {
        alert('Errore nell\'invio del modulo: ' + error);
    });
});

      
 
