function doPost(e) {
    const sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
    const rowData = [
      e.parameter.attend,
      e.parameter.fullName,
      e.parameter.phoneNumber,
      e.parameter.relationship,
      e.parameter.relationshipText,
      e.parameter.additionalInfo
    ];
    sheet.appendRow(rowData);
    
    return ContentService.createTextOutput('Success');
  }