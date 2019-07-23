function sendmail() {
    let $recipient = 'cgabrieltkd@yahoo.com.br'; /* store the recipient email */

    $.post("sendmail.php", {
        recipient: $recipient,
        name: $('#nome').val(),
        email: $('#email').val(),
        subject: $('#assunto').val(),
        message: $('#validationTextarea').val(),
        rand: Math.random()
    });
};