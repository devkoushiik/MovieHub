import { useEffect } from "react";

export function useKey(key, action) {
  // implementing key press
  useEffect(() => {
    const cb = (e) => {
      if (e.code.toLowerCase() === "Escape".toLowerCase()) {
        action();
      }
    };
    // setting el at dom
    document.addEventListener("keydown", cb);
    // cleaning function
    return () => document.removeEventListener("keydown", cb);
  }, [action, key]);
}
