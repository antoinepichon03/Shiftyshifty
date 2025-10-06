const containerStyle = {
  textAlign: "center",
  marginTop: "20vh"
};
const titleStyle = {
  color: "#1976d2",
  fontSize: "3rem"
};
const pStyle = {
  color: "#444",
  fontSize: "1.2rem"
};

const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#1976d2",
    color: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
  };

  const loginButtonStyle = {
    background: "#fff",
    color: "#1976d2",
    border: "none",
    borderRadius: "4px",
    padding: "0.5rem 1.2rem",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
    transition: "background .2s, color .2s"
  };


function App() {
  return (
    <div style={containerStyle}>
       <header style={headerStyle}>
        <div style={{ fontWeight: "bold", fontSize: "1.5rem", letterSpacing: "2px" }}>
          Shyfty
        </div>
        <button
          style={loginButtonStyle}
          onMouseOver={e => {
            e.target.style.background="#1565c0";
            e.target.style.color="#fff";
          }}
          onMouseOut={e => {
            e.target.style.background="#fff";
            e.target.style.color="#1976d2";
          }}
        >
          Connexion
        </button>
      </header>
      <h1 style={titleStyle}>Bienvenue sur Shyfty</h1>
      <p style={pStyle}>shyfty et tout, on est content</p>
    </div>
  );
}

export default App;
