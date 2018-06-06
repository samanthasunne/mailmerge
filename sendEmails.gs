function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  // startRow is the first row of data to process. It's usually '2' since you skip the header
  var startRow = 2;  
  // numRows is the number of rows to process - how many rows do you want to email before the script stops
  var numRows = 97;   

  // Fetch the range of cells A2 to D2. All the relevant data (first name, last name, email, notes, etc) should be in this range
  var dataRange = sheet.getRange(startRow, 1, numRows, 4)

  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    // firstName, and the rest of the variables, should be located in the column number in 'row[]'. The numbering starts at zero, so Column C would be row[2], not row[3]
    var firstName = row[2];
    var lastName = row[1];
    var recipient = row[0];
    // You can make a customized message for each email recipient by writing the message in the column specified as "custom" below. Or, you can send everyone the same message by writing it as a string in the 'body' variable below. If you do that, frame your message in quote marks and it should appear in red text.
    var custom = row[3];
    {
      // This is the body of your message. '\n' signifies a line break.
      var body = "Hey " + firstName + "," + '\n\n' + "Custom message here!"; 
      var subject = "New journalism/tech meetup";
      MailApp.sendEmail(recipient, subject, body);
    };
  };
};
