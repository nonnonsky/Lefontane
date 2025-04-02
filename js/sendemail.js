 document.getElementById("checkin").addEventListener("change", calcolaNotti);
    document.getElementById("checkout").addEventListener("change", calcolaNotti);

    function calcolaNotti() {
      let checkin = new Date(document.getElementById("checkin").value);
      let checkout = new Date(document.getElementById("checkout").value);
      if (checkout > checkin) {
        let diff = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
        document.getElementById("totale-notti").textContent = diff + " notti";
      } else {
        document.getElementById("totale-notti").textContent = "0 notti";
      }
    }

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
      
      emailjs.send("service_7txlbbc", "template_0fnlqhi", formData)
      .then(function(response) {
        document.getElementById("messaggio-conferma").classList.remove("hidden");
      }, function(error) {
        alert("Errore nell'invio dell'email");
      });
    });
