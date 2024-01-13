// src/hooks/useOnScreen.ts

import { useState, useEffect, useRef } from 'react';

const useOnScreen = (options?: IntersectionObserverInit) => {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isIntersecting] as const;
};

export default useOnScreen;
