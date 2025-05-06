import { Container, Typography, TextField, Button, Box } from '@mui/material';

export const metadata = {
    title: 'Contact Us | YourBrand',
    description: 'Get in touch with the YourBrand team for inquiries or support.',
};

export default function Contact() {
    return (
        <Container component="main" sx={{ py: 6 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
                Have questions or want to work with us? Fill out the form below and we’ll get back to you.
            </Typography>

            <Box component="form" sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField label="Name" name="name" fullWidth required />
                <TextField label="Email" name="email" fullWidth required type="email" />
                <TextField label="Message" name="message" fullWidth multiline rows={4} />
                <Button variant="contained" color="primary" sx={{ alignSelf: 'flex-start' }}>
                    Submit
                </Button>
            </Box>
        </Container>
    );
}
