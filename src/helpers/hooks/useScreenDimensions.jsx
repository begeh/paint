import { useState, useEffect } from "react";

const getWidth = () =>
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const getHeight = () =>
  document.documentElement.clientHeight ||
  document.body.clientHeight;

export const useScreenDimensions = () => {
  // save current window width in the state object
  const [dimensions, setDimensions] = useState({
    width: getWidth(),
    height: getHeight(),
  });

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setDimensions({ width: getWidth(), height: getHeight() });
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return dimensions;
};
