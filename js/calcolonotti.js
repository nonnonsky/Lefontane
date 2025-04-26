/* //Calcolo delle notti
  document.getElementById('checkin').addEventListener('change', calcolaNotti);
  document.getElementById('checkout').addEventListener('change', calcolaNotti);


function calcolaNotti() {
    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;

    if (checkin && checkout) {
        var date1 = new Date(checkin + "T00:00:00");
        var date2 = new Date(checkout + "T00:00:00");

        var diffTime = date2.getTime() - date1.getTime();
        var diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

        if (diffDays > 0) {
            notti = diffDays; // Assegna il valore alla variabile globale
            document.getElementById('totale-notti').innerText = notti + " notti";
        } else {
            notti = 0; // Reset in caso di errore
            document.getElementById('totale-notti').innerText = "Errore: Check-out deve essere dopo il Check-in";
        }
    }
}*/

document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("pd5BHjNg_hK-eDQGQ");

    const form = document.getElementById("preventivoForm");
    const checkinInput = document.getElementById("checkin");
    const checkoutInput = document.getElementById("checkout");
    const strutturaInput = document.getElementById("struttura");
    const totaleNottiOutput = document.getElementById("totale-notti");

    function calcolaNotti() {
        const checkinDate = new Date(checkinInput.value);
        const checkoutDate = new Date(checkoutInput.value);
        if (isNaN(checkinDate) || isNaN(checkoutDate) || checkinDate >= checkoutDate) {
            totaleNottiOutput.textContent = "0 notti";
            return 0;
        }
        const notti = Math.ceil((checkoutDate - checkinDate) / (1000 * 3600 * 24));
        // Mostra solo il numero di notti sulla pagina
        totaleNottiOutput.textContent = ${notti} notti;
        return notti;
    }


    function calcolaPrezzo(checkinDate, checkoutDate, struttura) {
        let prezzoTotale = 0;
        let dataCorrente = new Date(checkinDate);

        while (dataCorrente < checkoutDate) {
            let mese = dataCorrente.getMonth() + 1;
            let prezzoNotte = 0;

            if (struttura === "garden_house") {
                if (mese >= 5 && mese <= 6) prezzoNotte = 100;
                else if (mese === 7 ) prezzoNotte = 120;
                else if (mese === 8) prezzoNotte = 160;
               else if (mese === 9) prezzoNotte = 100;
            } else if (struttura === "ca_da_marta") {
                if (mese >= 5 && mese <= 6) prezzoNotte = 90;
                else if (mese === 7) prezzoNotte = 110;
                else if (mese === 8) prezzoNotte = 140;
                else if (mese === 9) prezzoNotte = 80;
            }

            prezzoTotale += prezzoNotte;
            dataCorrente.setDate(dataCorrente.getDate() + 1);
        }
        return prezzoTotale;
    }

    checkinInput.addEventListener("change", calcolaNotti);
    checkoutInput.addEventListener("change", calcolaNotti);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const checkinDate = new Date(checkinInput.value);
        const checkoutDate = new Date(checkoutInput.value);
        const struttura = strutturaInput.value;
        const notti = calcolaNotti();
        const prezzoTotale = calcolaPrezzo(checkinDate, checkoutDate, struttura);

        const formData = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefono: document.getElementById("telefono").value,
            struttura: struttura,
            checkin: checkinInput.value,
            checkout: checkoutInput.value,
            notti: notti,
            // Invia il prezzo via email senza mostrarlo sulla pagina
            prezzo: prezzoTotale.toFixed(2) + " €",
            adulti: document.getElementById("adulti").value,
            bambini: document.getElementById("bambini").value,
            animali: document.getElementById("animali").value,
            info: document.getElementById("info").value
        };

        emailjs.send("service_7txlbbc", "template_0fnlqhi", formData)
            .then(function (response) {
                console.log("Email inviata con successo!", response);
                document.getElementById("messaggio-conferma").classList.remove("hidden");
            })
            .catch(function (error) {
                console.error("Errore EmailJS:", error);
                alert("Errore nell'invio del modulo: " + (error.text || JSON.stringify(error)));
            });
    });
});

