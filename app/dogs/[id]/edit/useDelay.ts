import { useEffect, useState } from "react";

function useDelay(ms: number): boolean {
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false);
    }, ms);

    return () => clearTimeout(timer);
  }, [ms]);

  return delayed;
}

export default useDelay;
