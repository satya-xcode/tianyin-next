import { cardImageZoomStyles } from '@/components/animations/css/export/cardImageZoomStyles';
import HeroSection from '@/components/shared/HeroSection';
import MainContainer from '@/components/shared/MainContainer';
import { Stack, Typography, Grid, Card, CardContent, CardMedia, Button, Box } from '@mui/material';
import Link from 'next/link';

function EvSolution() {

    return (

        <>

            {/* Hero Section */}
            <HeroSection
                title="EV Charging Solutions"
                description="Empowering Electric Vehicles with Advanced Charging Infrastructure and Smart Energy Solutions."
                backgroundImage={'/products/ev/ev5.avif'}
                // onCtaClick={() => console.log("CTA clicked!")}
                showBreadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Ev", href: "/ev" },
                ]}
                showBackButton
            />

            <MainContainer>

                {/* About EV Charging */}
                <Box sx={{}}>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <Stack gap={2}>
                                <Stack>
                                    <Typography variant={'h2'} fontWeight="bold">Future-Ready EV Charging</Typography>

                                </Stack>
                                <Typography variant={'body1'} align='left'>
                                    At <strong>Tianyin Worldtech</strong>, we are revolutionizing EV charging infrastructure to make electric vehicle adoption seamless and efficient. Our smart and scalable solutions cater to urban cities, highways, and commercial spaces.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <CardMedia component="img" width={200} height={200} image="/products/ev/ev-solutions.png" alt="EV Charging Station" sx={{ borderRadius: 2, ...cardImageZoomStyles }} />
                        </Grid>
                    </Grid>
                </Box>

                {/* EV Charging Solutions */}
                <Stack gap={4} sx={{}}>
                    <Stack alignItems={'center'}>
                        <Typography variant={'h2'} fontWeight="bold" align="center">Our EV Charging Solutions</Typography>

                    </Stack>
                    <Grid container spacing={4}>
                        {[
                            { title: "Smart Charging Stations", desc: "Fast and efficient EV charging with real-time monitoring and mobile app integration.", image: "/products/ev/ev2.jpg" },
                            { title: "Commercial & Public Charging", desc: "Scalable EV charging solutions for businesses, malls, and urban infrastructures.", image: "/products/ev/ev3.avif" },
                            { title: "Renewable Energy Integration", desc: "Green charging solutions powered by solar and wind energy for sustainability.", image: "/products/ev/ev4.avif" },
                        ].map((item, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                                    <CardMedia component="img" height="180" sx={{ ...cardImageZoomStyles }} image={item.image} alt={item.title} />
                                    <CardContent>
                                        <Typography variant={'h3'} fontWeight="bold">{item.title}</Typography>
                                        <Typography variant={'body1'}>{item.desc}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                {/* Call to Action */}
                <Stack sx={{ justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                    <Stack>
                        <Typography variant={'h2'} fontWeight="bold">Partner with Us for a Sustainable Future</Typography>

                    </Stack>
                    <Typography variant={'body1'}>Join us in building a greener, smarter EV charging network. Contact us to learn more.</Typography>
                    <Button variant="contained" color="primary" component={Link} href="/contact" size="large">Contact Us</Button>
                </Stack>
            </MainContainer>

        </>


    );
}

export default EvSolution;
