import { useState, useEffect } from "react";
const useOnline = () => {
  const [isOnline, setIsOnline] = useState([]);
  useEffect(() => {
    const Handleonline = () => {
      setIsOnline(true);
    };
    const Handleoffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", Handleonline);

    window.addEventListener("offline", Handleoffline);
    return () => {
      window.removeEventListener("online", Handleonline);
      window.removeEventListener("offline", Handleoffline);
    };
  }, []);
  return isOnline;
};

export default useOnline;
