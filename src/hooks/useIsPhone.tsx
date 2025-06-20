import { useEffect, useState } from "react";

export default function useIsPhone() {
  const [isPhone, setIsPhone] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsPhone(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isPhone;
}
