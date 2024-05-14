import * as React from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = React.useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const parsed =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(parsed);
            window.localStorage.setItem(key, JSON.stringify(parsed));
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
        }
    };

    return [storedValue, setValue];
};
