import { CircularProgress } from '@mui/material'
import React from 'react'

function GlobalLoader() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CircularProgress size={50} />
        </div>
    )
}

export default GlobalLoader