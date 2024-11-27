import React, { useEffect, useState } from "react";
import env from "react-dotenv";

const SysfailStatus: React.FC = () => {
    const [sysfail, setSysfail] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const url = env.API_URL;

        if (!url) {
            setError("API Not Found!");
            return;
        }

        const eventSource = new EventSource(url + "/client/stream");

        eventSource.onmessage = (event) => {
            try {
                const updatedValue = JSON.parse(event.data);
                console.log(updatedValue);
                setSysfail(updatedValue === true);
            } catch (err) {
                console.error("Failed to parse SSE message:", err);
                setError("Failed to process updates.");
            }
        };

        eventSource.onerror = () => {
            setError("Connection lost. Retrying...");
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, []);

    return (
        <div className="px-6 w-fit p-4 text-3xl flex flex-row flex-wrap justify-center items-center bg-gray-800 rounded-md hover:cursor-pointer">
            <h2 className="mr-2">Status:</h2>
            {error ? (
                <h2 className="text-red-700">{error}</h2>
            ) : sysfail !== null ? (
                <h2 className={`${sysfail ? "text-red-700" : "text-green-700"}`}>
                    {sysfail ? "System Failure!" : "System Working!"}
                </h2>
            ) : (
                <h2>Loading status...</h2>
            )}
        </div>
    );
};

export default SysfailStatus;
