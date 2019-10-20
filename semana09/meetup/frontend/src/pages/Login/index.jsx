import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post("/sessions", { email })

    const { _id } = response.data;
    localStorage.setItem("@meetup/user", _id);

    history.push("/dashboard");
  }
  return (
    <>
      <p>
        Offer developer <strong>workplace</strong> and find{" "}
        <strong>talent</strong> for your business.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Register your best e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button className="btn">Access</button>
      </form>
    </>
  );
}
