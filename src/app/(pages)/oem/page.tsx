'use client'
import { cardImageZoomStyles } from '@/components/animations/css/export/cardImageZoomStyles';
import HeroSection from '@/components/shared/HeroSection';
import MainContainer from '@/components/shared/MainContainer';
import useDeviceType from '@/hooks/ui/useDeviceType';
import { Stack, Typography, Grid, Card, CardContent, CardMedia, Button, Box, useTheme, Container } from '@mui/material';

function OemManufacturing() {
    const { spacing } = useTheme();
    const { isMobile } = useDeviceType()
    return (

        <>
            {/* Hero Section */}
            <HeroSection
                title="OEM Manufacturing"
                description="Expertise in designing and manufacturing high-quality products for Original Equipment Manufacturers, meeting precise specifications and standards."
                backgroundImage={'/products/oem/pcb.avif'}

                showBreadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                ]}
                showBackButton
            />


            <MainContainer>

                {/* About OEM Manufacturing */}
                <Box>
                    <Grid container spacing={spacing(4)}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack gap={spacing(2)}>
                                <Stack>
                                    <Typography variant={'h2'} fontWeight="bold">Custom Manufacturing Solutions</Typography>

                                </Stack>
                                <Typography variant={'body1'}>
                                    At <strong>Tianyin Worldtech</strong>, we provide end-to-end **OEM manufacturing services**, helping businesses bring their **innovative products** to market with **high precision and efficiency**. From **concept design** to **mass production**, we ensure top-notch quality and reliability.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <CardMedia component="img" width={200} height={250} image="/products/oem/repair.jpg" alt="OEM Manufacturing Facility" sx={{ borderRadius: 2, ...cardImageZoomStyles }} />
                        </Grid>
                    </Grid>
                </Box>

                {/* Our OEM Services */}
                <Stack gap={spacing(4)}>
                    <Stack alignItems={'center'}>
                        <Typography variant={'h2'} fontWeight="bold" align="center">Our OEM Manufacturing Services</Typography>

                    </Stack>
                    <Grid container spacing={spacing(4)}>
                        {[
                            { title: "Custom Product Design", desc: "From ideation to prototyping, we create innovative and efficient product designs.", image: "/products/oem/prototype.png" },
                            { title: "Precision Manufacturing", desc: "High-quality, large-scale production with strict quality control processes.", image: "/products/oem/cnc-machine.png" },
                            { title: "Private Label Production", desc: "Brand your products with custom labeling and packaging solutions.", image: "/products/oem/factory.png" },
                        ].map((item, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Card
                                    sx={{

                                        height: isMobile ? "auto" : 330, // Adjust height for mobile
                                    }}
                                    variant='elevation'
                                    elevation={1}
                                >
                                    <CardContent sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: spacing(2) }}>
                                        <CardMedia component="img" height="180" sx={{ width: 100, alignItems: 'center', objectFit: "contain" }} image={item.image} alt={item.title} />
                                        <Typography variant={'h3'} fontWeight="bold">{item.title}</Typography>
                                        <Typography variant={'body1'}>{item.desc}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

                {/* Call to Action */}
                <Stack alignItems={'center'} justifyContent={'center'}>
                    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                        <Typography variant={'h2'} fontWeight="bold">Partner with Us for OEM Excellence</Typography>
                        <Typography variant={'body1'}>Looking for a **reliable** and **high-quality OEM manufacturer**? Get in touch with our team to discuss your project requirements.</Typography>
                        <Button variant="contained" color="primary" size="large">Contact Us</Button>
                    </Container>
                </Stack>

            </MainContainer>


        </>



    );
}

export default OemManufacturing;
