import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabelInput from '../components/FloatingLabelInput';
import { useUser } from '../context/UserContext';

export default function Signup() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
  });
  const [isAgency, setIsAgency] = useState('yes');

  const update = (key) => (value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div
      className="phone-frame"
      style={{
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <h1 className="screen-heading">
        Create your
        <br />
        PopX account
      </h1>

      <div
        style={{
          marginTop: 28,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <FloatingLabelInput
          label="Full Name*"
          value={form.fullName}
          onChange={update('fullName')}
        />
        <FloatingLabelInput
          label="Phone number*"
          value={form.phone}
          onChange={update('phone')}
        />
        <FloatingLabelInput
          label="Email address*"
          value={form.email}
          onChange={update('email')}
        />
        <FloatingLabelInput
          label="Password*"
          type="password"
          value={form.password}
          onChange={update('password')}
        />
        <FloatingLabelInput
          label="Company name"
          value={form.company}
          onChange={update('company')}
        />
      </div>

      <div style={{ marginTop: 20 }}>
        <p style={{ fontSize: 14, color: '#1a1a2e', marginBottom: 10 }}>
          Are you an Agency?*
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          {['yes', 'no'].map((value) => (
            <label
              key={value}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                cursor: 'pointer',
              }}
            >
              <input
                type="radio"
                name="agency"
                value={value}
                checked={isAgency === value}
                onChange={() => setIsAgency(value)}
                style={{ accentColor: '#6c3ce1', width: 18, height: 18 }}
              />
              <span style={{ fontSize: 14, color: '#1a1a2e' }}>
                {value === 'yes' ? 'Yes' : 'No'}
              </span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        style={{ marginTop: 'auto', paddingTop: 32 }}
        onClick={() => {
          setUser({ name: form.fullName.trim(), email: form.email.trim() });
          navigate('/profile');
        }}
      >
        Create Account
      </button>
    </div>
  );
}
