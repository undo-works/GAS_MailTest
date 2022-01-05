function doGet() {
  return HtmlService.createHtmlOutputFromFile('mail');
}

function myFunction(form) {
  GmailApp.sendEmail('email@address.com','テストメール',form.mainText);
}
