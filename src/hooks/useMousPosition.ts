import {useEffect, useState} from "react";

export const useMousePosition = (): number => {
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const setFromEvent = (e: { clientX: number }) => setPosition(e.clientX);
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return position;
};
