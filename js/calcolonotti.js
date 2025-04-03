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

document.addEventListener("DOMContentLoaded", function() {
    const checkin = document.getElementById("checkin");
    const checkout = document.getElementById("checkout");
    const struttura = document.getElementById("struttura");
    const totaleNottiElem = document.getElementById("totale-notti");

    function calcolaPrezzo() {
        if (!checkin.value || !checkout.value || !struttura.value) {
            totaleNottiElem.textContent = "0 notti";
            return;
        }

        const dataCheckin = new Date(checkin.value);
        const dataCheckout = new Date(checkout.value);
        const notti = Math.ceil((dataCheckout - dataCheckin) / (1000 * 60 * 60 * 24));

        if (notti <= 0) {
            totaleNottiElem.textContent = "0 notti";
            return;
        }

        let prezzoPerNotte = 0;
        const meseCheckin = dataCheckin.getMonth() + 1; // Da 0-11 a 1-12

        if (struttura.value === "garden_house") {
            if (meseCheckin >= 5 && meseCheckin <= 6) prezzoPerNotte = 100;
            else if (meseCheckin === 7 || meseCheckin === 9) prezzoPerNotte = 120;
            else if (meseCheckin === 8) prezzoPerNotte = 160;
        } else if (struttura.value === "ca_da_marta") {
            if (meseCheckin >= 5 && meseCheckin <= 6) prezzoPerNotte = 90;
            else if (meseCheckin === 7 || meseCheckin === 9) prezzoPerNotte = 110;
            else if (meseCheckin === 8) prezzoPerNotte = 140;
        }

        const prezzoTotale = notti * prezzoPerNotte;
        totaleNottiElem.textContent = `${notti} notti - ${prezzoTotale} €`;
        return { notti, prezzoTotale };
    }

    checkin.addEventListener("change", calcolaPrezzo);
    checkout.addEventListener("change", calcolaPrezzo);
    struttura.addEventListener("change", calcolaPrezzo);
});
