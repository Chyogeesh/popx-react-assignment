import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = () => {
    navigate("/account");
  };

  return (
    <div className="screen">
      <h1>Create your PopX account</h1>

      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <input
        name="company"
        placeholder="Company Name"
        onChange={handleChange}
      />

      <div>
        <label>
          <input type="radio" name="agency" value="yes" />
          Yes
        </label>

        <label>
          <input type="radio" name="agency" value="no" />
          No
        </label>
      </div>

      <button onClick={submitForm}>
        Create Account
      </button>
    </div>
  );
}

export default Register;
