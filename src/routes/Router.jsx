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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Protected />}>
                    <Route element={<AppLayouts />}>
                        <Route index element={<Home />} />
                    </Route>

                    <Route path="/notes" element={<NoteLayout />}>
                        <Route index element={<EmptyNote />} />
                        <Route path=":id" element={<SingleNote />} />
                    </Route>

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
