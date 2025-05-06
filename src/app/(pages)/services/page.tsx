import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

export const metadata = {
    title: 'Our Services | YourBrand',
    description: 'Explore the services offered by YourBrand including web development, SEO, and more.',
};

export default function Services() {
    return (
        <Container component="main" sx={{ py: 6 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Our Services
            </Typography>
            <Typography variant="body1" paragraph>
                We offer a wide range of services tailored to your needs:
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Web Development" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Search Engine Optimization (SEO)" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="UI/UX Design" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Digital Marketing" />
                </ListItem>
            </List>
        </Container>
    );
}
