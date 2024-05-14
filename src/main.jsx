import "@/index.css"; // styling
import "@/libs/i18n"; // translation

import App from "@/App.jsx"; // impor komponen utama app (struktur, routing utama)
import AuthProvider from "@/context/authContext"; // impor context u/ auth
import React from "react"; // untuk membuat komponen react
import ReactDOM from "react-dom/client"; // untuk render komponen react ke DOM
import ThemeProvider from "@/context/themeContext"; // untuk light or dark mode

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
