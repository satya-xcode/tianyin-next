'use client';

import { Container, ContainerProps, SxProps, useTheme } from '@mui/material';
import React, { CSSProperties } from 'react';

function MainContainer({
    children,
    sx,
    style,
    ...props
}: {
    children: React.ReactNode;
    sx?: SxProps;
    style?: CSSProperties;
} & ContainerProps) {
    const theme = useTheme();

    return (
        <Container
            {...props}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                p: theme.spacing(4),
                gap: theme.spacing(8),
                ...sx,
            }}
            style={style}
        >
            {children}
        </Container>
    );
}

export default MainContainer;
