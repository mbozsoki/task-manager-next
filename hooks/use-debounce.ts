import { useEffect, useState } from "react";

const DEFAULT_DELAY = 500;

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay ?? DEFAULT_DELAY);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
