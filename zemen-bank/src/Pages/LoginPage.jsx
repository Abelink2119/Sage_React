import { useState } from "react";

function LoginPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "abel",
    email: "",
    password: "",
    confirmPassword: "",
    favorite: "swimming",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form Data:", formData);
    alert(`Welcome, ${formData.firstName} ${formData.lastName}!`);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      username: "abel",
      email: "",
      password: "",
      confirmPassword: "",
      favorite: "swimming",
    });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="favorite">Favorite Thing:</label>
        <select
          id="favorite"
          name="favorite"
          value={formData.favorite}
          onChange={handleChange}
          required
        >
          <option value="swimming">Swimming</option>
          <option value="football">Football</option>
          <option value="watching_movies">Watching Movies</option>
        </select>
        <br />
        <br />

        <input type="submit" value="Submit" />
        <input
          type="reset"
          value="Reset"
          onClick={handleReset}
          style={{ marginLeft: "10px" }}
        />
      </form>
    </div>
  );
}

export default LoginPage;
