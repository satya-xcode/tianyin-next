import { CSSObject } from "@mui/material";

export const cardImageZoomStyles: CSSObject = {
    transition: 'transform 0.5s',
    '&:hover': {
        transform: 'scale(1.05)',
    }
}