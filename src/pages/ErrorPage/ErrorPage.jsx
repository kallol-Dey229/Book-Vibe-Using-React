import React from "react";

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Page Not Found</h2>
        <p style={styles.text}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <a href="/" style={styles.link}>
          Go Back Home
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    maxWidth: "400px",
    width: "100%",
  },
  code: {
    fontSize: "80px",
    margin: "0",
    color: "#764ba2",
  },
  title: {
    margin: "10px 0",
    fontSize: "24px",
    fontWeight: "bold",
  },
  text: {
    color: "#555",
    marginBottom: "20px",
    fontSize: "14px",
  },
  link: {
    display: "inline-block",
    padding: "12px 24px",
    borderRadius: "6px",
    background: "#667eea",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default ErrorPage;