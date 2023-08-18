import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  // getting value from local storage
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  // saving data in local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
