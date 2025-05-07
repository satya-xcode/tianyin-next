import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                }}
            >
                <Typography variant="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
                    404
                </Typography>
                <Typography variant="h5" sx={{ mb: 3 }}>
                    Oops! Page not found
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    The page you're looking for doesn't exist or has been moved
                </Typography>
                <Button
                    variant="contained"
                    component={Link}
                    href="/"
                    size="large"
                >
                    Return to Home
                </Button>
            </Box>
        </Container>
    )
}