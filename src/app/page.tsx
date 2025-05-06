import { Container, Typography, Box } from '@mui/material';

export const metadata = {
  title: 'Home | YourBrand',
  description: 'Welcome to YourBrand. Learn about our mission and services.',
};

export default function Home() {
  return (
    <Container component="main" sx={{ py: 6 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to YourBrand
      </Typography>
      <Typography variant="body1">
        We are committed to delivering top-notch solutions for businesses using cutting-edge technology. Explore our services to learn more.
      </Typography>
    </Container>
  );
}
