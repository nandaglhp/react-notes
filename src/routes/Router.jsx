import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayouts from "@/layouts/AppLayouts";
import AuthLayout from "@/layouts/AuthtLayout";
import EmptyNote from "@/pages/notes/EmptyNote";
import FormNote from "@/pages/notes/FormNote";
import Home from "@/pages/Home";
import Login from "@/pages/auth/Login";
import NoteLayout from "@/layouts/NoteLayouts";
import Protected from "@/pages/Protected";
import Register from "@/pages/auth/Register";
import SingleNote from "@/pages/notes/SingleNote";

export default function Router() {
  return (
    // Pembungkus utama history API (navigasi tanpa reload halaman.)
    <BrowserRouter>
      {/* Pembungkus untuk koleksi Route */}
      <Routes>
        {/* Komponen yang mendefinisikan rute individu dalam aplikasi. */}
        {/* Protected:  memeriksa apakah pengguna telah terotentikasi sebelum mengizinkan akses ke rute anak. */}
        <Route path="/" element={<Protected />}>
          {/* element = menentukan komponen yang harus dirender ketika rute tertentu dicocokkan. */}
          <Route element={<AppLayouts />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="/notes" element={<NoteLayout />}>
            <Route index element={<EmptyNote />} />
            <Route path=":id" element={<SingleNote />} />
          </Route>

          {/* archived true */}
          <Route path="/archived" element={<NoteLayout archived />}>
            <Route index element={<EmptyNote />} />
            <Route path=":id" element={<SingleNote />} />
          </Route>

          <Route path="/create" element={<NoteLayout />}>
            <Route index element={<FormNote />} />
          </Route>
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
