import { useState } from "react";
import "../styles/main.css";
import bgVideo from "../assets/homepage.mp4";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Modal from "./Modal.jsx";

function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      <div className="video-hero">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video>

        <div className="overlay">
          <h1>Inventory Management System</h1>
          <p>
            Track stock, manage suppliers, monitor sales,
            and generate reports efficiently.
          </p>

          <div className="hero-actions">
            <button onClick={() => setShowLogin(true)}>Login</button>
            <button className="register-btn" onClick={() => setShowRegister(true)}>
              Register
            </button>
          </div>
        </div>
      </div>

      {showLogin && (
        <Modal close={() => setShowLogin(false)}>
          <Login />
        </Modal>
      )}

      {showRegister && (
        <Modal close={() => setShowRegister(false)}>
          <Register />
        </Modal>
      )}
    </>
  );
}

export default Home;
