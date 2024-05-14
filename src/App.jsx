import Router from "@/routes/Router";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <main className="antialiased leading-relaxed text-gray-900 bg-white font-rubik dark:bg-gray-900 dark:text-gray-100">
            <Toaster
                position="bottom-right"
                toastOptions={{
                    duration: 1000,
                    className:
                        "text-sm shadow-none border border-gray-200 rounded-lg py-2 px-4 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 text-gray-900",
                    success: {
                        iconTheme: {
                            primary: "#477268",
                            secondary: "#ffffff",
                        },
                    },
                }}
            />
            <Router />
        </main>
    );
};

export default App;
