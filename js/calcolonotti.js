 //Calcolo delle notti
  document.getElementById('checkin').addEventListener('change', calcolaNotti);
  document.getElementById('checkout').addEventListener('change', calcolaNotti);


function calcolaNotti() {
    var checkin = document.getElementById('checkin').value;
    var checkout = document.getElementById('checkout').value;

    if (checkin && checkout) {
        // Converti le stringhe in oggetti Date
        var date1 = new Date(checkin + "T00:00:00"); 
        var date2 = new Date(checkout + "T00:00:00"); 

        // Calcola la differenza in millisecondi
        var diffTime = date2.getTime() - date1.getTime();
        var diffDays = Math.floor(diffTime / (1000 * 3600 * 24)); // Converte in giorni interi

        // Evita valori negativi
        if (diffDays > 0) {
            document.getElementById('totale-notti').innerText = diffDays + " notti";
        } else {
            document.getElementById('totale-notti').innerText = "Errore: Check-out deve essere dopo il Check-in";
        }
    }
}
