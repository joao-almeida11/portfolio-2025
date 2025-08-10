import { useEffect, useState } from "react";

export default function useIsPhone() {
  // isPhone should be 768px but since this is only used on the navbar and it is quite large i will increase its size
  const [isPhone, setIsPhone] = useState(() => window.innerWidth <= 800);

  useEffect(() => {
    function handleResize() {
      setIsPhone(window.innerWidth <= 800);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isPhone;
}
