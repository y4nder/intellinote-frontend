import { useEffect, useRef} from "react";

export const useAutoSave = <T>(
  value: T,
  onSave: (val: T) => void,
  delay: number = 800,
  initialMount: boolean = true
) => {
    const hasMounted = useRef(initialMount);
    useEffect(() => {
        if(!hasMounted.current){
            hasMounted.current = true;
            console.log("mounting on first load...")
            return;
        }

        if (value === undefined || value === null) return;

        const timeout = setTimeout(() => {
            onSave(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay, onSave, initialMount]);
};
