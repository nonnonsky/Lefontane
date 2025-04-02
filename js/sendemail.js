document.getElementById("preventivoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        struttura: document.getElementById("struttura").value,
        checkin: document.getElementById("checkin").value,
        checkout: document.getElementById("checkout").value,
        adulti: document.getElementById("adulti").value,
        bambini: document.getElementById("bambini").value,
        animali: document.getElementById("animali").value,
        info: document.getElementById("info").value
    };

    emailjs.send("service_7txlbbc", "Template ID:template_0fnlqhi", formData)
    .then(function(response) {
        alert("Email inviata con successo!");
    }, function(error) {
        alert("Errore nell'invio dell'email: " + error.text);
    });
});
