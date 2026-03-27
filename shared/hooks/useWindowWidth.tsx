import { useState, useEffect } from "react";

export function useWindowWidth() {
    const [w, setW] = useState<number | null>(null);

    useEffect(() => {
        const handler = () => setW(window.innerWidth);

        handler()
        window.addEventListener("resize", handler);

        return () => window.removeEventListener("resize", handler);
    }, []);

    return w;
}