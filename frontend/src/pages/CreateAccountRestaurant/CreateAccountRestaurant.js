import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../UserContext"; // Update this path if needed
import "./CreateAccountRestaurant.css"; // Assuming you have a CSS file for styling

const CreateAccountRestaurant = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/owners/signup/",
        {
          OwnerVorname: formData.firstName,
          OwnerNachname: formData.lastName,
          OwnerPasswort: formData.password,
          OwnerEmail: formData.email,
          OwnerTelefonNummer: formData.telephone,
        }
      );

      const userDetailsResponse = await axios.get(
        `http://127.0.0.1:8000/api/owners/${response.data.OwnerID}/`
      );

      console.log("User signed up:", response.data); // log the user data after signup

      // Store the user data in your context
      setUser(userDetailsResponse.data);
      navigate("/addrestaurantdetails");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-account-container">
      <form onSubmit={handleSubmit}>
        <h1>Creating a Lieferspatz Restaurant account</h1>
        <p>Owner's Information</p>

        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />

        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />

        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Enter your telephone number"
          required
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
        <small>Use 8 characters or more for your password</small>

        <button type="submit">Add Restaurant details</button>
      </form>
    </div>
  );
};

export default CreateAccountRestaurant;
