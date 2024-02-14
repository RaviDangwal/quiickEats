import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  //check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("oneline", () => {
      setOnlineStatus(true);
    });
  }, []);
  //boolean values
  return onlineStatus;
};

export default useOnlineStatus;
