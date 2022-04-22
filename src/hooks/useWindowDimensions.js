import { useState, useEffect } from 'react';

const isBrowser = typeof window !== 'undefined';

// We are returning 800 in case the build fails

function getWindowDimensions() {
  if (!isBrowser) {
    return 800;
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (!isBrowser) {
      return 800;
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
