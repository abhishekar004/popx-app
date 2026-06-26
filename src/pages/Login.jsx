import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingLabelInput from '../components/FloatingLabelInput';
import { useUser } from '../context/UserContext';

export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const canLogin = email.trim() && password.trim();

  return (
    <div className="phone-frame" style={{ padding: '32px 24px' }}>
      <h1 className="screen-heading">
        Signin to your
        <br />
        PopX account
      </h1>
      <p className="screen-subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div
        style={{
          marginTop: 28,
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <FloatingLabelInput
          label="Email Address"
          placeholder="Enter email address"
          value={email}
          onChange={setEmail}
        />
        <FloatingLabelInput
          label="Password"
          placeholder="Enter password"
          type="password"
          value={password}
          onChange={setPassword}
        />
      </div>

      <button
        type="button"
        className={`btn ${canLogin ? 'btn-primary' : 'btn-disabled'}`}
        style={{ marginTop: 20 }}
        disabled={!canLogin}
        onClick={() => {
          setUser({
            name: user?.name || email.trim(),
            email: email.trim(),
          });
          navigate('/profile');
        }}
      >
        Login
      </button>
    </div>
  );
}
