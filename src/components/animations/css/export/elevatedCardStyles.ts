import { CSSObject } from "@mui/material";

export const elevatedSquireCardStyles: CSSObject = {
    // backdropFilter: 'blur(10px)',
    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transform: 'translateZ(0)',
    transition: 'transform 0.5s, border-radius 0.5s, box-shadow 0.5s',
    '&:hover': {
        transform: 'translateZ(20px) scale(1.02)',
        boxShadow: '0 0 20px rgba(19, 236, 225, 0.53)',
        borderRadius: 8,
    }
}

export const elevatedHorizontalCardStyles: CSSObject = {
    transform: 'translateZ(0)',
    transition: 'transform 0.5s, border-radius 0.5s, box-shadow 0.5s',
    cursor: 'pointer',
    '&:hover': {
        transform: 'translateZ(20px) scale(1.02)',
        boxShadow: '0 0 20px rgba(19, 236, 225, 0.53)',
        borderRadius: 4,
    }
}

export const linearGradient = `rgba(0, 20, 50, 0.95), rgb(30, 30, 30)`;
