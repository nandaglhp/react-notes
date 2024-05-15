import * as React from "react";

import { AuthContext } from "@/context/authContext";

// ketika dipanggil akan mengakses konteks autentikasi.
export const useAuth = () => {
  // useContext adalah hook yang disediakan oleh React untuk mengonsumsi konteks yang telah didefinisikan
  // mengakses nilai yang saat ini disediakan oleh AuthContext.
  const context = React.useContext(AuthContext);
  // memastikan bahwa context tidak null. Jika context null, itu berarti useAuth
  // digunakan di luar komponen yang dibungkus oleh AuthProvider.
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  // mengembalikan context yang telah diperoleh dari AuthContext
  return context;
};
