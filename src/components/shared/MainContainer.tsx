'use client'
import { Container, StackProps, SxProps, useTheme } from '@mui/material'
import React, { CSSProperties } from 'react'

function MainContainer({ children, sx, style, ...props }: { children: React.ReactNode, sx?: SxProps, style?: CSSProperties } & StackProps) {
    const { spacing } = useTheme();

    return (
        <Container {...props} sx={{ display: 'flex', flexDirection: 'column', p: spacing(4), gap: spacing(4), ...sx }} style={style}>
            {children}
        </Container>
    )
}

export default MainContainer