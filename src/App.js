import React from "react";
import "./App.css";
import { useApp } from "./hooks/useApp";

function App() {
  const { setEmail, setSubject, setBody, loading, error, data, handleSubmit } =
    useApp();

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Send Mail</h2>
        {data && <p>Success send mail, please check your inbox </p>}
        <input
          className="form-control"
          type="email"
          placeholder="Input email..."
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Input Subject..."
          required
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className="form-text-area"
          placeholder="Input Body..."
          required
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="button">Send</button>
      </form>
    </div>
  );
}

export default App;
