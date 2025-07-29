# Simple Google Sheets Form

A clean, simple React form that submits data to Google Sheets.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Set up Google Sheets:**
   - Create a new Google Sheet
   - Copy the Sheet ID from the URL
   - Update `google-apps-script/Code.gs` with your Sheet ID

4. **Deploy Google Apps Script:**
   - Go to [Google Apps Script](https://script.google.com/)
   - Create a new project
   - Copy the code from `google-apps-script/Code.gs`
   - Deploy as a web app
   - Copy the web app URL

5. **Update the form:**
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` in `src/App.tsx` with your web app URL

## 📋 Features

- ✅ Clean, responsive form design
- ✅ Form validation
- ✅ Success/error messages
- ✅ Writes to Google Sheets
- ✅ Timestamp tracking
- ✅ No backend required

## 🛠️ Setup Details

### Google Apps Script Setup

1. **Create the script:**
   - Go to [script.google.com](https://script.google.com/)
   - Click "New Project"
   - Replace the default code with the content from `google-apps-script/Code.gs`

2. **Update the Sheet ID:**
   - In the script, replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual Google Sheet ID
   - The Sheet ID is in the URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID_HERE/edit`

3. **Deploy the script:**
   - Click "Deploy" → "New deployment"
   - Choose "Web app"
   - Set "Execute as" to "Me"
   - Set "Who has access" to "Anyone"
   - Click "Deploy"
   - Copy the web app URL

4. **Test the script:**
   - Run the `setupSheet()` function once to create headers
   - Test with the `doGet()` function

### React App Setup

1. **Update the URL:**
   - Open `src/App.tsx`
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your web app URL

2. **Test the form:**
   - Fill out the form
   - Submit
   - Check your Google Sheet for the new row

## 📁 Project Structure

```
├── src/
│   ├── App.tsx          # Main form component
│   ├── App.css          # Styles
│   └── index.css        # Tailwind CSS
├── google-apps-script/
│   └── Code.gs          # Google Apps Script code
├── tailwind.config.js   # Tailwind configuration
└── README.md           # This file
```

## 🎨 Customization

- **Form fields:** Edit the form fields in `src/App.tsx`
- **Styling:** Modify the Tailwind classes
- **Sheet columns:** Update the `setupSheet()` function in the Google Apps Script
- **Validation:** Add more validation rules in both the React app and Google Apps Script

## 🔧 Troubleshooting

- **CORS errors:** Make sure your Google Apps Script is deployed as a web app with "Anyone" access
- **Sheet not updating:** Check that the Sheet ID is correct and you have edit permissions
- **Form not submitting:** Check the browser console for errors and verify the web app URL

## 📝 License

MIT License - feel free to use this for your projects!
