import { useState, useEffect } from "react";


const useWindowSize = () => {
  
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Set size at the first client-side load
    handleResize();

    window.addEventListener("resize", handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setScreenWidth]);

  return screenWidth;
};

export default useWindowSize;