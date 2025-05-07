import { CSSObject } from "@mui/material";

export const singleLineSort: CSSObject = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 1, // note the capital 'W' in WebkitLineClamp
    WebkitBoxOrient: 'vertical',
}
export const doubleLineSort: CSSObject = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2, // note the capital 'W' in WebkitLineClamp
    WebkitBoxOrient: 'vertical',
}