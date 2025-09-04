import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState<{
    scrollY: number;
    scrollX: number;
  }>({
    scrollY: 0,
    scrollX: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScroll({
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scroll;
};
