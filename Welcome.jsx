import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="screen bottom-screen">
      <h1>Welcome to PopX</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <button
        className="primary-btn"
        onClick={() => navigate("/register")}
      >
        Create Account
      </button>

      <button
        className="secondary-btn"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;
