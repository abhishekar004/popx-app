import { useUser } from '../context/UserContext';

const dashedBorder = {
  borderBottom: '1px dashed #d1d5db',
};

export default function Profile() {
  const { user } = useUser();
  const name = user?.name || 'Marry Doe';
  const email = user?.email || 'Marry@Gmail.Com';

  return (
    <div
      className="phone-frame"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ background: '#ffffff', padding: 24, ...dashedBorder }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: '#1a1a2e' }}>
          Account Settings
        </h2>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginTop: 20,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: 60,
              height: 60,
              flexShrink: 0,
            }}
          >
            <img
              src="https://i.pravatar.cc/60"
              alt="Profile"
              style={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <span
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 20,
                height: 20,
                borderRadius: '50%',
                background: '#6c3ce1',
                color: '#fff',
                fontSize: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-hidden="true"
            >
              📷
            </span>
          </div>

          <div>
            <p style={{ fontWeight: 600, fontSize: 16, color: '#1a1a2e' }}>
              {name}
            </p>
            <p style={{ fontSize: 13, color: '#6b7280' }}>{email}</p>
          </div>
        </div>

        <p
          style={{
            marginTop: 20,
            fontSize: 13,
            color: '#6b7280',
            lineHeight: 1.6,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
      </div>

      <div style={{ flex: 1, background: '#f7f8f9' }} />

      <div style={dashedBorder} />
    </div>
  );
}
