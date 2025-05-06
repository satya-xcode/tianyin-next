import { Container, Typography } from '@mui/material';

export const metadata = {
    title: 'About Us | YourBrand',
    description: 'Discover the mission, values, and story behind YourBrand.',
};

export default function About() {
    return (
        <Container component="main" sx={{ py: 6 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1">
                YourBrand was founded with the goal of helping businesses thrive in a digital world. Our team of experts is passionate about delivering real results.
            </Typography>
        </Container>
    );
}
