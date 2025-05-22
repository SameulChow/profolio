import { useEffect, useState } from "react";

// Custom hook to track the scroll position of the window
const useScrollPosition = () => {
  // State to store the current scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Function to update the scroll position state
    const updatePosition = () => setScrollPosition(window.scrollY);

    // Adding the event listener to track scroll events
    window.addEventListener("scroll", updatePosition);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", updatePosition);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Return the current scroll position
  return {
    scrollPosition,
    isScrolling: scrollPosition > 0,
  };
};

export default useScrollPosition;
