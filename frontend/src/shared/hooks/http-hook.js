import { useState, useCallback, useRef, useEffect } from "react";

export function useHttpClient() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const activeHttpRequests = useRef([]);

    useCallback(async function sendRequest(url, method = 'GET', body = null, headers = {}) {
        
        setIsLoading(true);
        const httpAbortCtrl = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrl);

        try {
            const response = await fetch(url, {
                method: method,
                body: body,
                headers: headers,
                signal: httpAbortCtrl.signal
            });

            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message);
            }
            return responseData;
        } catch(err) {
            setError(err.message);
        }
        setIsLoading(false);
    }, []);

    function clearError() {
        setError(null);
    };

    useEffect(() => {
        return () => {
            activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort());
        };
    }, []);

    return {isLoading, error, sendRequest, clearError};
};