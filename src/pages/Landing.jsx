import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="phone-frame"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <div style={{ padding: '32px 24px' }}>
        <h1 className="screen-heading">Welcome to PopX</h1>
        <p className="screen-subtext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div
          style={{
            marginTop: 32,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate('/signup')}
          >
            Create Account
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
