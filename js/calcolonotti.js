 //Calcolo delle notti
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
}

