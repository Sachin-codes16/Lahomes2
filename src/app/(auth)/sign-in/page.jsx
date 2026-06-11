import logo from '@/assets/images/app-calendar/alwijha.webp';
import authBg from '@/assets/images/Twilight minimalism in smooth concrete.png';
import { Button, Form } from 'react-bootstrap';

const SignInPage = () => {
  return (
    <main
      style={{
        alignItems: 'center',
        backgroundImage: `linear-gradient(rgba(19, 23, 34, 0.52), rgba(19, 23, 34, 0.52)), url(${authBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 24,
      }}
    >
      <section
        style={{
          background: '#fff',
          borderRadius: 8,
          boxShadow: '0 24px 60px rgba(12, 18, 32, 0.2)',
          maxWidth: 500,
          padding: '44px 35px 70px',
          width: '100%',
        }}
      >
        <div className="text-center" style={{ marginBottom: 42 }}>
          <img alt="Alwijha Real Estate" src={logo} style={{ height: 64, objectFit: 'contain' }} />
        </div>

        <h1
          className="text-center"
          style={{
            color: '#526b89',
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: 0,
            marginBottom: 31,
            textTransform: 'uppercase',
          }}
        >
          Sign In
        </h1>

        <Form>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label style={labelStyle}>Username</Form.Label>
            <Form.Control placeholder="Enter your Username" style={inputStyle} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label style={labelStyle}>Enter Password</Form.Label>
            <Form.Control placeholder="Enter your Password" style={inputStyle} type="password" />
          </Form.Group>

          <Form.Check
            className="mb-4"
            id="remember-me"
            label="Remember me"
            style={{ color: '#526b89', fontSize: 14 }}
          />

          <Button
            className="w-100"
            style={{
              background: '#303946',
              borderColor: '#303946',
              borderRadius: 5,
              fontSize: 14,
              minHeight: 44,
            }}
            type="submit"
          >
            Sign In
          </Button>
        </Form>
      </section>
    </main>
  );
};

const labelStyle = {
  color: '#526b89',
  fontSize: 14,
  fontWeight: 500,
};

const inputStyle = {
  background: '#f4f7fa',
  border: '1px solid #edf1f5',
  borderRadius: 5,
  color: '#526b89',
  minHeight: 44,
  paddingLeft: 16,
};

export default SignInPage;
