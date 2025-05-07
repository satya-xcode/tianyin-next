import React, { CSSProperties } from 'react';
import '../css/AnimatedHoveredBorder.css'; // Make sure to import the CSS file
import { Box } from '@mui/material';

function AnimatedHoveredBorder({ children, style }: { children: React.ReactNode, style?: CSSProperties }) {
    return (
        <Box className="animated-border" style={style}>
            {children}
        </Box>
    );
}

export default AnimatedHoveredBorder;
