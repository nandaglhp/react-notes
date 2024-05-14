import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            hello: "Hello, {{name}}",
            greetings: "Welcome to NotesApp",
            description:
                " Welcome to NotesApp, a simple note-taking application built with React and TailwindCSS, and powered by RESTful API. check out the features and start taking notes.",
            feature: "List of Features",
            routes: {
                home: "Home",
                notes: "Notes",
                all: "All Notes",
                archived: "Archived",
                create: "Create Note",
            },
            features: {
                crud: "CRUD Operations",
                auth: "Authentication",
                dark: "Dark Mode",
                rest: "RESTful API",
                context: "Context API",
                i18n: "Internationalization",
            },
            languages: {
                change: "Change Language",
                choose: "Choose your language",
            },
            auth: {
                signin: {
                    label: "Sign In",
                    description:
                        "To continue please sign in to your account by filling out the form below.",
                    question: "Don't have an account?",
                    success: "Sign in successfully",
                },
                signup: {
                    label: "Sign Up",
                    description:
                        "Please fill out the form below to create an account, and start taking notes.",
                    question: "Already have an account?",
                    success: "Sign up successfully",
                },
                signout: {
                    label: "Sign Out",
                    success: "Sign out successfully",
                },
            },
            fields: {
                name: {
                    label: "Name",
                    placeholder: "Enter your name",
                    error: "Name is required",
                },
                email: {
                    label: "Email",
                    placeholder: "Enter your email",
                    error: "Email is required",
                },
                password: {
                    label: "Password",
                    placeholder: "Enter your password",
                    error: "Password is required",
                },
                title: {
                    label: "Title",
                    placeholder: "Enter the title",
                    error: "Title is required",
                },
                body: {
                    label: "Body",
                    placeholder: "Enter the body",
                    error: "Body is required",
                },
            },
            notes: {
                create: "Create Note",
                choose: "Choose the note you want to view",
                all: "All Notes",
                archived: "Archived Notes",
                caution:
                    "Be careful, once you submit the note, you can't edit it.",
                submit: "Submit",
                reset: "Reset",
                content: "Note Content",
                success: {
                    archived: "Note successfully archived",
                    unarchived: "Note successfully unarchived",
                    deleted: "Note successfully deleted",
                    created: "Note successfully created",
                },
            },
            ago: "ago",
            created: "Created",
            theme: {
                toggle: "Toggle Theme",
            },
        },
    },
    id: {
        translation: {
            hello: "Halo, {{name}}",
            greetings: "Selamat Datang di NotesApp",
            description:
                "Selamat datang di NotesApp, aplikasi catatan sederhana yang dibangun dengan React dan TailwindCSS, dan didukung oleh RESTful API. cek fitur-fiturnya dan mulai membuat catatan.",
            feature: "Daftar Fitur",
            routes: {
                home: "Beranda",
                notes: "Catatan",
                all: "Semua Catatan",
                archived: "Arsip",
                create: "Buat Catatan",
            },
            features: {
                crud: "Operasi CRUD",
                auth: "Autentikasi",
                dark: "Mode Gelap",
                rest: "RESTful API",
                context: "Context API",
                i18n: "Internasionalisasi",
            },
            languages: {
                change: "Ubah Bahasa",
                choose: "Pilih bahasa Anda",
            },
            auth: {
                signin: {
                    label: "Masuk",
                    description:
                        "Untuk melanjutkan silahkan masuk ke akun Anda dengan mengisi formulir di bawah.",
                    question: "Belum punya akun?",
                    success: "Berhasil masuk",
                },
                signup: {
                    label: "Daftar",
                    description:
                        "Silahkan isi formulir di bawah untuk membuat akun, dan mulai membuat catatan.",
                    question: "Sudah punya akun?",
                    success: "Berhasil mendaftar",
                },
                signout: {
                    label: "Keluar",
                    success: "Berhasil keluar",
                },
            },
            fields: {
                name: {
                    label: "Nama",
                    placeholder: "Masukkan nama Anda",
                    error: "Nama wajib diisi",
                },
                email: {
                    label: "Email",
                    placeholder: "Masukkan email Anda",
                    error: "Email wajib diisi",
                },
                password: {
                    label: "Kata Sandi",
                    placeholder: "Masukkan kata sandi Anda",
                    error: "Kata sandi wajib diisi",
                },
                title: {
                    label: "Judul",
                    placeholder: "Masukkan judul",
                    error: "Judul wajib diisi",
                },
                body: {
                    label: "Isi",
                    placeholder: "Masukkan isi",
                    error: "Isi wajib diisi",
                },
            },
            notes: {
                create: "Buat Catatan",
                choose: "Pilih catatan yang ingin dilihat",
                all: "Semua Catatan",
                archived: "Catatan Terarsip",
                caution:
                    "Hati-hati, setelah Anda mengirim catatan, Anda tidak dapat mengeditnya.",
                submit: "Kirim",
                reset: "Ulangi",
                content: "Konten Catatan",
                success: {
                    archived: "Berhasil mengarsipkan catatan",
                    unarchived: "Berhasil membuka arsip catatan",
                    deleted: "Catatan berhasil dihapus",
                    created: "Catatan berhasil dibuat",
                },
            },
            ago: "yang lalu",
            created: "Dibuat",
            theme: {
                toggle: "Ganti Tema",
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "id",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
