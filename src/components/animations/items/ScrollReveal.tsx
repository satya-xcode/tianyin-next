import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
            element,
            { opacity: 0, y: 180 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 85%", // Animation starts when 85% of element is in view
                    toggleActions: "play none none none", // Play animation once
                },
            }
        );
    }, []);

    return <Box ref={ref}>{children}</Box>;
};

export default ScrollReveal;
