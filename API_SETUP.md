# API Integration Setup Guide

## Overview
The registration form is now connected to a REST API for data submission. This guide explains how to set up and configure the API integration.

## Files Created

### 1. `src/services/api.ts`
- **Purpose**: API service layer with all HTTP requests
- **Features**:
  - Configurable base URL via environment variables
  - Request timeout handling (10 seconds)
  - Error handling and type safety
  - CRUD operations for registrations

### 2. `src/hooks/useRegistration.ts`
- **Purpose**: Custom React hook for form submission
- **Features**:
  - Loading states
  - Error handling
  - Toast notifications
  - Form validation

### 3. Updated `src/components/RegistrationForm.tsx`
- **Purpose**: Form component with API integration
- **Features**:
  - Real API submission
  - Loading indicators
  - Error display
  - Form validation

## Environment Configuration

Create a `.env` file in your project root:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3001/api

# Optional: Add other environment variables as needed
VITE_APP_NAME=Cipher Surge
VITE_APP_VERSION=1.0.0
```

## API Endpoints Expected

The frontend expects these API endpoints:

### POST `/api/registrations`
**Submit a new registration**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "parish": "Kingston",
  "event": "Cryptography Track",
  "age": "25",
  "professional": "Software Developer",
  "skillLevel": "intermediate",
  "teamPreference": "team",
  "specialization": "",
  "experience": "Some CTF experience",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "id": "123",
    "email": "john@example.com"
  }
}
```

### GET `/api/registrations`
**Get all registrations (admin)**

### GET `/api/registrations/:email`
**Get registration by email**

### PUT `/api/registrations/:email`
**Update registration**

### DELETE `/api/registrations/:email`
**Delete registration**

### GET `/api/health`
**Health check endpoint**

## Backend Implementation Examples

### Express.js Example
```javascript
const express = require('express');
const app = express();

app.use(express.json());

// POST /api/registrations
app.post('/api/registrations', async (req, res) => {
  try {
    const registrationData = req.body;
    
    // Validate required fields
    const required = ['fullName', 'email', 'parish', 'event', 'age', 'professional', 'skillLevel', 'teamPreference'];
    for (const field of required) {
      if (!registrationData[field]) {
        return res.status(400).json({
          success: false,
          error: `Missing required field: ${field}`
        });
      }
    }
    
    // Save to database
    // const saved = await saveRegistration(registrationData);
    
    res.json({
      success: true,
      message: 'Registration successful',
      data: { id: '123', email: registrationData.email }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

app.listen(3001, () => {
  console.log('API server running on port 3001');
});
```

### Python Flask Example
```python
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/registrations', methods=['POST'])
def create_registration():
    try:
        data = request.json
        
        # Validate required fields
        required_fields = ['fullName', 'email', 'parish', 'event', 'age', 'professional', 'skillLevel', 'teamPreference']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # Save to database
        # save_registration(data)
        
        return jsonify({
            'success': True,
            'message': 'Registration successful',
            'data': {'id': '123', 'email': data['email']}
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': 'Internal server error'
        }), 500

if __name__ == '__main__':
    app.run(port=3001, debug=True)
```

## Features Implemented

### ✅ Form Validation
- Required field validation
- Email format validation
- Age range validation (16-100)

### ✅ Loading States
- Button shows loading spinner
- Form fields disabled during submission
- Loading toast notification

### ✅ Error Handling
- Network error handling
- API error responses
- Timeout handling
- User-friendly error messages

### ✅ Success Feedback
- Success toast notification
- Form reset on success
- Modal closes automatically

### ✅ Type Safety
- TypeScript interfaces for all data
- API response typing
- Form data validation

## Testing the Integration

1. **Start your backend server** on the configured port
2. **Set the environment variable** `VITE_API_BASE_URL`
3. **Fill out the registration form** and submit
4. **Check the network tab** to see the API request
5. **Verify the response** in your backend logs

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure your backend allows requests from your frontend domain
2. **404 Errors**: Check that your API endpoints match the expected paths
3. **Timeout Errors**: Increase the timeout in `api.ts` if needed
4. **Environment Variables**: Make sure `.env` file is in the project root

### Debug Mode:
Add this to your `.env` file to see API requests in the console:
```env
VITE_DEBUG_API=true
```

## Next Steps

1. **Implement your backend API** using one of the examples above
2. **Add database integration** (MongoDB, PostgreSQL, etc.)
3. **Add email notifications** for successful registrations
4. **Implement admin dashboard** to view registrations
5. **Add data validation** on the backend
6. **Set up production environment** variables 