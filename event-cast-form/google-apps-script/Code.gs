/**
 * Simple Google Apps Script for Form Submissions
 * This script receives form data and writes it to a Google Sheet
 */

// Your Google Sheet ID
const SHEET_ID = '1EXV7Ajk6kQddnCcDs-ipFkOyKE6N0oGO6j3if5Xf0Lc';

function doPost(e) {
  try {
    console.log('Form submission received');
    console.log('Request data:', e.postData);
    console.log('Parameters:', e.parameter);
    
    // Parse the incoming data with multiple format support
    let data;
    
    // Try to parse as JSON first (only if postData exists)
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
        console.log('Parsed JSON data:', data);
      } catch (parseError) {
        console.error('JSON parsing error:', parseError);
        // Continue to try other formats
      }
    }
    
    // If JSON parsing failed or no postData, try URL parameters
    if (!data && e.parameter) {
      data = {
        name: e.parameter.name || '',
        email: e.parameter.email || '',
        phone: e.parameter.phone || '',
        organization: e.parameter.organization || '',
        participantType: e.parameter.participantType || '',
        howHeard: e.parameter.howHeard || ''
      };
      console.log('Parsed URL parameter data:', data);
    }
    
    // If still no data, try FormData parsing
    if (!data && e.postData && e.postData.type === 'application/x-www-form-urlencoded') {
      try {
        const formData = e.postData.contents;
        const params = new URLSearchParams(formData);
        data = {
          name: params.get('name') || '',
          email: params.get('email') || '',
          phone: params.get('phone') || '',
          organization: params.get('organization') || '',
          participantType: params.get('participantType') || '',
          howHeard: params.get('howHeard') || ''
        };
        console.log('Parsed FormData:', data);
      } catch (parseError) {
        console.error('FormData parsing error:', parseError);
      }
    }
    
    // If still no data, return error
    if (!data) {
      console.log('No valid data found in request');
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'No valid data received. Please check the request format.'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Validate required fields
    if (!data.name || !data.email) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          error: 'Name and email are required'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Get the spreadsheet and sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Prepare the data row - wrap phone in quotes to prevent formula parsing
    const timestamp = new Date();
    const phoneValue = data.phone ? `"${data.phone}"` : '';
    const rowData = [
      timestamp,
      data.name,
      data.email,
      phoneValue,
      data.organization || '',
      data.participantType || '',
      data.howHeard || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    console.log('Data added successfully to row:', sheet.getLastRow());
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Form submitted successfully!',
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error processing submission:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: 'Server error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      success: true,
      message: 'Form API is running!',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Setup function - run this once to create headers
 */
function setupSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Set up headers
    const headers = [
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Organization',
      'Participant Type',
      'How Did You Hear About Us'
    ];
    
    // Clear existing content and set headers
    sheet.clear();
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange
      .setFontWeight('bold')
      .setBackground('#4285f4')
      .setFontColor('#ffffff');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
    
    // Add data validation for participant type column
    const participantTypeRange = sheet.getRange(2, 6, 1000, 1);
    const participantTypeRule = SpreadsheetApp.newDataValidation()
      .requireValueInList(['Partners', 'Press/Media', 'Lab ambassadors', 'Public/General attendees', 'Sponsors', 'Tech enthusiasts'])
      .setAllowInvalid(false)
      .setHelpText('Select participant type from the list')
      .build();
    participantTypeRange.setDataValidation(participantTypeRule);
    
    console.log('Sheet setup completed');
    return 'Sheet headers created successfully!';
    
  } catch (error) {
    console.error('Setup error:', error);
    return 'Setup failed: ' + error.toString();
  }
} 