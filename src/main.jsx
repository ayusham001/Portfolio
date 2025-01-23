import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "https://www.google.com";
  }, []);

  return null; // Since it's redirecting, no UI is necessary
}

export default App;
