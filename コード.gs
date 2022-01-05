function doGet() {
  return HtmlService.createHtmlOutputFromFile('mail');
}

function myFunction(form) {
  GmailApp.sendEmail('markz29022097@gmail.com','テストメール',form.mainText);
}
