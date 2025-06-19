import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleEnterCamera = () => {
    navigate("/camera");
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f4faff",
      padding: "20px",
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "2rem",
      color: "#1e293b",
      transition: "color 0.3s ease",
    },
    headingHover: {
      color: "#0f766e",
    },
    button: {
      padding: "12px 24px",
      backgroundColor: "#0ea5e9",
      border: "none",
      borderRadius: "12px",
      color: "white",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
    buttonHover: {
      backgroundColor: "#0284c7",
      transform: "scale(1.05)",
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);
  const [titleHovered, setTitleHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      <h1
        style={{
          ...styles.heading,
          ...(titleHovered ? styles.headingHover : {}),
        }}
        onMouseEnter={() => setTitleHovered(true)}
        onMouseLeave={() => setTitleHovered(false)}
      >
        Submit The Photograph
      </h1>

      <button
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleEnterCamera}
      >
        Enter Camera
      </button>
    </div>
  );
}

export default HomePage;
