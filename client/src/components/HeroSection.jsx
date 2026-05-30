import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitLead } from '../services/api';

const COUNTRIES = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia",
  "Austria","Azerbaijan","Bahrain","Bangladesh","Belarus","Belgium","Bhutan","Bolivia",
  "Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Cambodia","Cameroon",
  "Canada","Chile","China","Colombia","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic",
  "Denmark","Dominican Republic","Ecuador","Egypt","El Salvador","Estonia","Ethiopia",
  "Finland","France","Georgia","Germany","Ghana","Greece","Guatemala","Honduras","Hungary",
  "Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan",
  "Jordan","Kazakhstan","Kenya","Kuwait","Laos","Latvia","Lebanon","Libya","Lithuania",
  "Luxembourg","Malaysia","Maldives","Malta","Mexico","Moldova","Monaco","Mongolia","Morocco",
  "Mozambique","Myanmar","Nepal","Netherlands","New Zealand","Nicaragua","Nigeria","Norway",
  "Oman","Pakistan","Palestine","Panama","Paraguay","Peru","Philippines","Poland","Portugal",
  "Qatar","Romania","Russia","Saudi Arabia","Senegal","Serbia","Singapore","Slovakia",
  "Slovenia","South Africa","South Korea","Spain","Sri Lanka","Sudan","Sweden","Switzerland",
  "Syria","Taiwan","Tajikistan","Tanzania","Thailand","Tunisia","Turkey","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela",
  "Vietnam","Yemen","Zambia","Zimbabwe"
];

const IEC_OPTIONS = ["Yes", "No", "Not Sure"];
const SHIP_FREQ = ["Daily","Weekly","Monthly","Occasionally","First Time"];

const HeroSection = () => {
  const navigate = useNavigate();

  const [shippingType, setShippingType] = useState('');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    companyName: '', address: '', postalCode: '', city: '',
    country: 'India', iec: '', shipFrequency: '', consent: false,
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!shippingType) e.shippingType = 'Please select how you would like to ship with DHL';
    if (!formData.firstName.trim()) e.firstName = 'First Name is required';
    if (!formData.lastName.trim()) e.lastName = 'Last Name is required';
    if (!formData.phone) e.phone = 'Mobile Phone Number is required';
    else if (!/^[0-9]{7,15}$/.test(formData.phone.replace(/[\s\-\+]/g, '')))
      e.phone = 'Enter a valid phone number';
    if (!formData.email) e.email = 'Email Address is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) e.email = 'Enter a valid email address';
    if (shippingType === 'regular') {
      if (!formData.companyName.trim()) e.companyName = 'Company Name is required';
      if (!formData.address.trim()) e.address = 'Address is required';
      if (!formData.postalCode.trim()) e.postalCode = 'Postal Code is required';
      if (!formData.city.trim()) e.city = 'City is required';
    } else if (shippingType === 'one-time') {
      if (!formData.postalCode.trim()) e.postalCode = 'Postal Code is required';
    }
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      await submitLead({ ...formData, shippingType });
      navigate('/thank-you');
    } catch (err) {
      const msg = err?.response?.data?.errors?.[0]
        || err?.response?.data?.message
        || 'Something went wrong. Please try again.';
      setServerError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="hero">
      <div className="form-card">
        <form onSubmit={handleSubmit} noValidate>
          <h1 className="form-title">The Most International Company In The World!</h1>
          <p className="form-subtitle">
            From your office doorstep to your customer's doorstep –<br />
            Through Certified International Specialists.
          </p>
          <p className="form-desc">
            Fill in your details below &amp; our expert will call you within 4 working
            hours to assist with your account opening.
          </p>

          {/* Radio */}
          <p className="radio-question">How would you like to ship with DHL?</p>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="shippingType" value="regular"
                checked={shippingType === 'regular'}
                onChange={() => { setShippingType('regular'); setErrors({}); }} />
              I have regular shipping requirements
            </label>
            <label className="radio-option">
              <input type="radio" name="shippingType" value="one-time"
                checked={shippingType === 'one-time'}
                onChange={() => { setShippingType('one-time'); setErrors({}); }} />
              I have a one-time personal shipment
            </label>
            {errors.shippingType && <span className="radio-error">{errors.shippingType}</span>}
          </div>

          {/* Fields shown for BOTH types */}
          {shippingType && (
            <>
              <input className={`form-input${errors.firstName ? ' error-field' : ''}`}
                type="text" name="firstName" placeholder="First Name*"
                value={formData.firstName} onChange={handleChange} />
              {errors.firstName && <span className="field-error">{errors.firstName}</span>}

              <input className={`form-input${errors.lastName ? ' error-field' : ''}`}
                type="text" name="lastName" placeholder="Last Name*"
                value={formData.lastName} onChange={handleChange} />
              {errors.lastName && <span className="field-error">{errors.lastName}</span>}

              <input className={`form-input${errors.phone ? ' error-field' : ''}`}
                type="tel" name="phone" placeholder="Mobile Phone Number*"
                value={formData.phone} onChange={handleChange} />
              {errors.phone && <span className="field-error">{errors.phone}</span>}

              <input className={`form-input${errors.email ? ' error-field' : ''}`}
                type="email" name="email" placeholder="Email Address*"
                value={formData.email} onChange={handleChange} />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </>
          )}

          {/* Extra fields ONLY for regular shipping */}
          {shippingType === 'regular' && (
            <>
              <input className={`form-input${errors.companyName ? ' error-field' : ''}`}
                type="text" name="companyName" placeholder="Company Name*"
                value={formData.companyName} onChange={handleChange} />
              {errors.companyName && <span className="field-error">{errors.companyName}</span>}

              <input className={`form-input${errors.address ? ' error-field' : ''}`}
                type="text" name="address" placeholder="Address*"
                value={formData.address} onChange={handleChange} />
              {errors.address && <span className="field-error">{errors.address}</span>}

              <input className={`form-input${errors.postalCode ? ' error-field' : ''}`}
                type="text" name="postalCode" placeholder="Postal Code*"
                value={formData.postalCode} onChange={handleChange} />
              {errors.postalCode && <span className="field-error">{errors.postalCode}</span>}

              <input className={`form-input${errors.city ? ' error-field' : ''}`}
                type="text" name="city" placeholder="City*"
                value={formData.city} onChange={handleChange} />
              {errors.city && <span className="field-error">{errors.city}</span>}

              <select className="form-input form-select" name="country"
                value={formData.country} onChange={handleChange}>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>

              <select className="form-input form-select" name="iec"
                value={formData.iec} onChange={handleChange}>
                <option value="">Do you have an IEC?</option>
                {IEC_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
              </select>

              <select className="form-input form-select" name="shipFrequency"
                value={formData.shipFrequency} onChange={handleChange}>
                <option value="">How often do you ship?</option>
                {SHIP_FREQ.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            </>
          )}

          {/* Postal Code + Country for one-time */}
          {shippingType === 'one-time' && (
            <>
              <input className={`form-input${errors.postalCode ? ' error-field' : ''}`}
                type="text" name="postalCode" placeholder="Postal Code*"
                value={formData.postalCode} onChange={handleChange} />
              {errors.postalCode && <span className="field-error">{errors.postalCode}</span>}

              <select className="form-input form-select" name="country"
                value={formData.country} onChange={handleChange}>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </>
          )}

          {/* Consent + Privacy + Submit — only show if a type is selected */}
          {shippingType && (
            <>
              <div className="consent-row">
                <input type="checkbox" name="consent" id="consent"
                  checked={formData.consent} onChange={handleChange} />
                <label htmlFor="consent" className="consent-text">
                  Yes, I would like to receive emails, calls and WhatsApp communications
                  with information and offers from DHL, and can withdraw this consent at any time.
                </label>
              </div>
              <p className="privacy-text">
                Please read our{' '}
                <a href="https://www.dhl.com/in-en/home/footer/local-privacy-notice.html"
                  target="_blank" rel="noreferrer">Privacy Notice</a>{' '}
                to find out how your email will be used.
              </p>
              {serverError && (
                <p style={{ color: '#D40511', fontSize: '12px', marginBottom: '12px' }}>
                  ⚠ {serverError}
                </p>
              )}
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
