import HeroSection from '@/components/shared/HeroSection';
import { CheckCircle, TrendingUp, VerifiedUser } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import PolicyTabsSection from './components/PolicyTabsSection';
import FAQSection from './components/FAQSection';

export const metadata = {
    title: 'About Us | YourBrand',
    description: 'Discover the mission, values, and story behind YourBrand.',
};
const features = [
    "Advanced Charger & Adapter Manufacturing",
    "Precision Engineering & High-Quality Components",
    "Innovative R&D for Smart Power Solutions",
    "State-of-the-Art Production Facilities",
    "Stringent Quality Control & Testing",
    "Sustainable & Energy-Efficient Manufacturing",
];
export default function About() {
    return (
        <Stack spacing={4}>

            <HeroSection
                title="Transforming Electronics Manufacturing Since 2015"
                description="Pioneering sustainable power solutions with cutting-edge technology and ISO-certified quality standards in Noida, India."
                backgroundImage={'/image/banners/about.avif'}
                showBreadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us", href: "/about" },
                ]}
                aria-label="About Tianyin Worldtech"
                showBackButton
            />

            <Stack component={"main"} sx={{ p: 4 }}>
                <Stack aria-labelledby="about-heading">
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Stack gap={2}>
                                <Typography variant={'h2'} component="h1" align="left" id="about-heading" sx={{ visibility: 'hidden', height: 0, margin: 0 }}>
                                    About Tianyin Worldtech - Electronics Manufacturer
                                </Typography>
                                <Typography data-aos='fade-down' variant={'body1'} align="left" color="primary.light" sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
                                    Trusted Electronics Manufacturer
                                </Typography>
                                <Typography component="h2" variant={'h2'} fontWeight="bold">
                                    Noida&apos;s Premier Charger & Power Adapter Manufacturer
                                </Typography>

                                <Typography align="left" component="p" variant={'body1'} color="textSecondary">
                                    As an <strong>ISO 9001:2015 certified manufacturer</strong> based in Noida, Tianyin Worldtech combines 20+ years of expertise with cutting-edge SMT production lines to deliver:
                                </Typography>

                                <List aria-label="Manufacturing capabilities">
                                    {features.map((feature, index) => (
                                        <ListItem key={index} component="li">
                                            <ListItemIcon aria-hidden="true">
                                                <CheckCircle color="secondary" />
                                            </ListItemIcon>
                                            <ListItemText primary={feature} />
                                        </ListItem>
                                    ))}
                                </List>

                                <Typography align="left" component="p" variant={'body1'}>
                                    Serving <strong>50+ global clients</strong> with monthly production capacity of 1M+ units across our 20,000 sq.ft facility.
                                </Typography>
                            </Stack>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }} >
                            <figure>
                                <Box
                                    component="img"
                                    src="/image/b1.jpg"
                                    alt="Tianyin Worldtech's state-of-the-art manufacturing facility in Noida"
                                    sx={{ width: "100%", borderRadius: 2, boxShadow: 3 }}
                                    loading="lazy"
                                />
                                <figcaption style={{ textAlign: 'center', marginTop: '8px', fontSize: '0.875rem' }}>
                                    Our ISO-certified production facility in Noida, Uttar Pradesh
                                </figcaption>
                            </figure>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>

            {/* Mission & Vision Section */}
            <Stack p={4} component="section" spacing={4} aria-labelledby="mission-vision">
                <Typography variant={'h2'} id="mission-vision" sx={{ textAlign: 'center', fontWeight: "bold" }}>
                    Our Core Values
                </Typography>

                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }} component="article">
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant={'h2'} component="h3" align="center" fontWeight="bold">
                                    <VerifiedUser sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    Quality Commitment
                                </Typography>
                                <Typography component="p" align="center">
                                    Our <strong>16-step quality control process</strong> ensures every product meets:
                                </Typography>
                                <List dense>
                                    <ListItem component="li">✓ IEC 60950-1 safety standards</ListItem>
                                    <ListItem component="li">✓ RoHS compliance</ListItem>
                                    <ListItem component="li">✓ 100% burn-in testing</ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }} component="article">
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant={'h2'} component="h3" align="center" fontWeight="bold">
                                    <TrendingUp sx={{ verticalAlign: 'middle', mr: 1 }} />
                                    Sustainable Growth
                                </Typography>
                                <Typography component="p" align="center">
                                    Pioneering eco-friendly manufacturing through:
                                </Typography>
                                <List dense>
                                    <ListItem component="li">● Energy-efficient production lines</ListItem>
                                    <ListItem component="li">● 90%+ material recycling rate</ListItem>
                                    <ListItem component="li">● Solar-powered facilities</ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Stack>

            <PolicyTabsSection />

            {/* Certification Badges */}
            <Stack component="section" aria-labelledby="certifications">
                <Container maxWidth='lg'>
                    <Grid container spacing={4} alignItems={'center'}>
                        <Grid size={{ xs: 12 }}>
                            <Container maxWidth='md'>
                                <Stack spacing={4}>
                                    <Typography align="center" variant={'h2'} id="certifications" sx={{ fontWeight: "bold" }}>
                                        Certifications & Compliance
                                    </Typography>
                                    <Typography variant={'body1'} align="center" >
                                        Our certifications and compliance framework provide assurance to our customers that their personal data is protected and handled in accordance with the highest standards of security and integrity.
                                    </Typography>
                                </Stack>
                            </Container>
                        </Grid>
                        <Grid size={{ xs: 12 }}>
                            <Grid container spacing={4} justifyContent="center">
                                {[
                                    { img: '/certificates/crt.jpeg', alt: 'ISO 9001:2015 Certified' },
                                    // { img: '/certificates/crt.jpeg', alt: 'ISO 9001:2015 Certified' },
                                    // { img: '/certificates/crt.jpeg', alt: 'ISO 9001:2015 Certified' },
                                    // { img: '/certificates/crt.jpeg', alt: 'ISO 9001:2015 Certified' },
                                    // { img: '/certificates/crt.jpeg', alt: 'ISO 9001:2015 Certified' }

                                ].map((cert, index) => (
                                    <Grid key={index}>
                                        <img
                                            src={cert.img}
                                            alt={cert.alt}
                                            style={{ height: 300, width: 'auto' }}
                                            loading="lazy"
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                    </Grid>


                </Container>
            </Stack >

            {/* Certification Badges */}

            <Stack component="section" alignItems="center" p={4} spacing={4}>
                <Typography variant={'h2'} align="center" id="certifications" sx={{ fontWeight: "bold" }}>
                    Our Customers
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {[
                        { img: '/clients/airtel2.jpeg', alt: 'ISO 9001:2015 Certified' },
                        { img: '/clients/changhong.jpeg', alt: 'ISO 14001:2015 Certified' },
                        { img: '/clients/d2h.png', alt: 'RoHS Compliant' },
                        { img: '/clients/dishtv.jpeg', alt: 'BIS Certified' },
                        { img: '/clients/dixon.png', alt: 'CE Certified' },
                        { img: '/clients/jio2.jpeg', alt: 'CE Certified' },
                        { img: '/clients/khy.png', alt: 'CE Certified' },
                        { img: '/clients/lava.png', alt: 'CE Certified' },
                        { img: '/clients/LYF.jpg', alt: 'CE Certified' },
                        { img: '/clients/nokia.png', alt: 'CE Certified' },
                        { img: '/clients/pie.png', alt: 'CE Certified' },
                        { img: '/clients/sercom.png', alt: 'CE Certified' },
                        { img: '/clients/wingtech2.jpeg', alt: 'CE Certified' },
                        { img: '/clients/itel.png', alt: 'CE Certified' },
                        { img: '/clients/oraimo.png', alt: 'CE Certified' },
                        { img: '/clients/sprocomm.png', alt: 'CE Certified' },
                        { img: '/clients/foxconn3.jpg', alt: 'CE Certified' },
                        { img: '/clients/karbonn.png', alt: 'CE Certified' }

                    ].map((cert, index) => (
                        <Grid key={index} size={{ xs: 12, sm: 12, md: 6, lg: 3 }}>
                            <Card sx={{ bgcolor: 'white', width: '100%', flex: 1 }}>
                                <CardContent sx={{ flex: 1, width: '100%' }}>
                                    <img
                                        src={cert.img}
                                        alt={cert.alt}
                                        style={{ height: 50, alignSelf: "center", display: "block", margin: "auto" }}
                                        loading="lazy"
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Stack>


            <Stack
                sx={{
                    position: "relative",
                    backgroundImage: "url('/about/partner2.avif')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    p: 4,
                    // borderRadius: '24px',
                    textAlign: "center",
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        // borderRadius: '24px',
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1,
                    },
                }}
            >
                <Stack sx={{ alignItems: 'center', position: "relative", zIndex: 2, justifyContent: 'center' }}>
                    <Typography variant={'h1'} fontWeight={'bold'} component="h2" gutterBottom>
                        Ready to Partner With Us?
                    </Typography>
                    <Typography variant={'body1'} component="p" gutterBottom>
                        Contact our sales team for OEM solutions or bulk orders
                    </Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        component="a"
                        href="/contact"
                        sx={{ mt: 2 }}
                    >
                        Get Custom Quote
                    </Button>


                </Stack>
            </Stack>

            <Stack component="section" sx={{ textAlign: 'center' }}>
                <FAQSection />
            </Stack>

        </Stack>
    );
}
