// app/aos-init.ts (recommended reusable setup)
'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosInit() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            easing: 'ease-in-out',
            // delay: 50,
            once: false,
        });
    }, []);

    return null;
}
