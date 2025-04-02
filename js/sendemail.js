import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

public class SendEmail {
    public static void main(String[] args) {
        // Configurazione SMTP
        final String username = "tuo@email.com"; // Inserisci la tua email
        final String password = "tua_password"; // Inserisci la tua password
        String toEmail = "destinatario@email.com"; // Inserisci l'email destinataria

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com"); // Cambia il server SMTP se necessario
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
            new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(username, password);
                }
            });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail));
            message.setSubject("Nuova Richiesta di Preventivo");

            // Corpo del messaggio
            String emailContent = "Richiesta di preventivo ricevuta:\n" +
                    "Nome: Mario Rossi\n" +
                    "Email: mario.rossi@email.com\n" +
                    "Telefono: 1234567890\n" +
                    "Struttura: Cà da Marta\n" +
                    "Check-in: 2025-04-10\n" +
                    "Check-out: 2025-04-15\n" +
                    "Totale notti: 5\n" +
                    "Adulti: 2\n" +
                    "Bambini: 1\n" +
                    "Animali: No\n" +
                    "Info: Vorrei sapere se ci sono camere con vista mare.";

            message.setText(emailContent);
            
            // Invia email
            Transport.send(message);
            System.out.println("Email inviata con successo!");
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
