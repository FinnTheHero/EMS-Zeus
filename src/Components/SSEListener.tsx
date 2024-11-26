import React, { useEffect, useState } from "react";
import env from "react-dotenv";

const SysfailStatus: React.FC = () => {
  const [sysfail, setSysfail] = useState<boolean | null>(null); // State for Sysfail status
  const [error, setError] = useState<string | null>(null); // State for errors

  useEffect(() => {
    // Create an EventSource to listen for SSE updates

    const url = env.API_URL;

    if (!url) {
      setError("API Not Found!");
      return;
    }

    const eventSource = new EventSource(url + "/client/stream");

    // Event listener for receiving messages
    eventSource.onmessage = (event) => {
      try {
        const updatedValue = JSON.parse(event.data); // Parse the incoming data
        console.log(updatedValue);
        setSysfail(updatedValue === true); // Update state
      } catch (err) {
        console.error("Failed to parse SSE message:", err);
        setError("Failed to process updates.");
      }
    };

    // Event listener for errors
    eventSource.onerror = () => {
      setError("Connection lost. Retrying...");
      eventSource.close(); // Close the connection on error
    };

    // Cleanup on component unmount
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className="text-3xl flex flex-row flex-nowrap items-center">
      <h2 className="mr-2">System Status:</h2>
      {error ? (
        <h2 className="text-red-700 text-2xl">{error}</h2>
      ) : sysfail !== null ? (
        <h2 className={`${sysfail ? "text-red-700" : "text-green-700"}`}>
          {sysfail ? " System failure!" : " Working"}
        </h2>
      ) : (
        <h2 className="text-2xl">Loading status...</h2>
      )}
    </div>
  );
};

export default SysfailStatus;
