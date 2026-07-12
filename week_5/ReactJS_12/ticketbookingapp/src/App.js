import React, { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ marginLeft: "180px", marginTop: "100px" }}>

      {isLoggedIn ? (
        <>
          <h1>Welcome back</h1>
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Please sign up.</h1>
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </>
      )}

    </div>
  );
}

export default App;