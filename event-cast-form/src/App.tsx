import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    participantType: '',
    howHeard: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Google Apps Script URL
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxtkIPGYYiUpcYyl2C6uTc1y4wBAtshJQQE2x68CYc9EvBxpxi6jk2etQ7-9vPxXUHSKQ/exec'
      
      // Try multiple approaches to handle CORS issues
      let response;
      
      // Approach 1: Try FormData (most compatible with Google Apps Script)
      try {
        const formDataObj = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          formDataObj.append(key, value);
        });
        
        response = await fetch(scriptUrl, {
          method: 'POST',
          body: formDataObj
        });
      } catch (error) {
        console.log('FormData approach failed, trying JSON...');
        
        // Approach 2: Try JSON
        response = await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
      }

      if (response.ok) {
        const result = await response.json()
        if (result.success) {
          setSubmitMessage('✅ Thank you! We\'ll be in touch soon.')
          setFormData({ name: '', email: '', phone: '', organization: '', participantType: '', howHeard: '' })
        } else {
          setSubmitMessage(`❌ Error: ${result.error}`)
        }
      } else {
        setSubmitMessage('❌ Network error. Please try again.')
      }
    } catch (error) {
      setSubmitMessage('❌ Connection error. Please try again.')
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="app-container">
      {/* Cool geometric background elements */}
      <div className="geometric-bg">
        {/* Animated grid pattern */}
        <div className="grid-pattern"></div>
        
        {/* Floating geometric shapes */}
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        <div className="geometric-shape"></div>
        
        {/* Floating backdrop elements */}
        <div className="backdrop-element"></div>
        <div className="backdrop-element"></div>
        <div className="backdrop-element"></div>
        <div className="backdrop-element"></div>
        
        {/* Particle effects */}
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      <div className="form-wrapper">
        {/* Header */}
        <div className="header">
          <div className="logo-container">
            <div className="logo-animation">
              <img src="/logo_transparent.png" alt="Crack the Code Logo" className="logo" />
              <div className="logo-glow"></div>
            </div>
            <h1>CRACK THE CODE</h1>
          </div>
          <div className="accent-divider"></div>
          <p>We'd love to stay in touch! Tell us how you heard about us.</p>
        </div>

        {/* Form */}
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {/* Contact Information Section */}
            <div className="form-section">
              <div className="section-header">
                <div className="icon-container">
                  <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <div className="icon-pulse"></div>
                </div>
                <div>
                  <h2>Contact Information</h2>
                  <p>We'd love to keep you updated</p>
                </div>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">
                    <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="organization">
                    <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Your company or organization"
                  />
                </div>
              </div>
            </div>

            {/* Event Details Section */}
            <div className="form-section">
              <div className="section-header">
                <div className="icon-container">
                  <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="icon-pulse"></div>
                </div>
                <div>
                  <h2>Tell Us More</h2>
                  <p>Help us understand your interests</p>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="participantType">
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Participant Type
                </label>
                <select
                  id="participantType"
                  name="participantType"
                  value={formData.participantType}
                  onChange={handleChange}
                >
                  <option value="">Select participant type</option>
                  <option value="Partners">Partners</option>
                  <option value="Press/Media">Press/Media</option>
                  <option value="Lab ambassadors">Lab ambassadors</option>
                  <option value="Public/General attendees">Public/General attendees</option>
                  <option value="Sponsors">Sponsors</option>
                  <option value="Tech enthusiasts">Tech enthusiasts</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  How did you discover Crack the Code?
                </label>
                <div className="radio-grid">
                  {[
                    { value: 'Media', label: 'Media', icon: '📰' },
                    { value: 'Google search', label: 'Google search', icon: '🔍' },
                    { value: 'Word of mouth', label: 'Word of mouth', icon: '💬' },
                    { value: 'Friend/family referral', label: 'Friend/family referral', icon: '👥' },
                    { value: 'Social media', label: 'Social media', icon: '📱' },
                    { value: 'Email newsletter', label: 'Email newsletter', icon: '📧' }
                  ].map((option) => (
                    <label 
                      key={option.value} 
                      className={`radio-option ${formData.howHeard === option.value ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="howHeard"
                        value={option.value}
                        checked={formData.howHeard === option.value}
                        onChange={handleChange}
                      />
                      <span className="radio-icon">{option.icon}</span>
                      <span className="radio-label">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="button-container">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
              >
                {isSubmitting ? (
                  <>
                    <svg className="spinner" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25"/>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="btn-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Stay Connected
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Success/Error Message */}
          {submitMessage && (
            <div className={`message ${submitMessage.includes('✅') ? 'success' : 'error'}`}>
              <span>{submitMessage.includes('✅') ? '✅' : '❌'}</span>
              <span>{submitMessage.replace('✅ ', '').replace('❌ ', '')}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
