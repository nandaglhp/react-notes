import * as React from "react";

import { AxiosError, axios } from "@/libs/axios";

export const useFetch = (url) => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const { data } = await axios.get(url);
                setData(data);
            } catch (error) {
                if (error instanceof AxiosError) setError(error.response.data);
                else setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, setData, setError, setLoading]);

    return { data, error, loading };
};
