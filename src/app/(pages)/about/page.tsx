/* eslint-disable @next/next/no-img-element */
import HeroSection from '@/components/shared/HeroSection';
import PolicyTabsSection from './components/PolicyTabsSection';
import FAQSection from './components/FAQSection';
import {
    Box, Button, Card, CardContent, Grid,
    List, ListItem, ListItemIcon, ListItemText,
    Stack, Typography
} from '@mui/material';
import { Metadata } from 'next';
import { CheckCircle, TrendingUp, VerifiedUser } from '@mui/icons-material';
import MainContainer from '@/components/shared/MainContainer';

export const metadata: Metadata = {
    title: 'About Tianyin Worldtech | OEM Electronics Manufacturer in Noida, India',
    description:
        'Learn about Tianyin Worldtech – an ISO 9001:2015 certified electronics manufacturer in Noida, India, specializing in mobile chargers and power adapters for global OEM clients.',
    keywords:
        'Tianyin Worldtech, Electronics Manufacturer Noida, OEM Charger Supplier India, ISO Certified Manufacturer, SMT Production, Power Adapters, B2B Electronics, Custom Chargers',
    generator: 'Next.js 15.3',
    applicationName: 'Tianyin Worldtech',
    creator: 'Tianyin Worldtech India Pvt. Ltd.',
    publisher: 'Tianyin Worldtech India Pvt. Ltd.',
    authors: [{ name: 'Tianyin Worldtech Team', url: 'https://tianyin.in' }],
    alternates: {
        canonical: 'https://tianyin.in/about',
    },
    openGraph: {
        title: 'About Tianyin Worldtech | ISO-Certified Electronics Manufacturer',
        description:
            'Discover Tianyin Worldtech’s mission, ISO certifications, SMT capabilities, and leadership in OEM electronics manufacturing in Noida, India.',
        url: 'https://tianyin.in/about',
        siteName: 'Tianyin Worldtech',
        images: [
            {
                url: 'https://tianyin.in/image/overview/company-building.webp',
                width: 1200,
                height: 630,
                alt: 'Tianyin Worldtech Noida Factory – Electronics Manufacturing',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Tianyin Worldtech | Electronics Manufacturer in India',
        description:
            'Explore our company, mission, ISO 9001:2015 certification, and trusted manufacturing for global OEMs.',
        creator: '@tianyinworldtech',
        images: ['https://tianyin.in/image/overview/staff.webp'],
    },
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
        <>
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

            <MainContainer>

                {/* About Description */}
                <Stack component="section" sx={{}} aria-labelledby="about-heading">
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h1" id="about-heading" sx={{ visibility: 'hidden', height: 0, m: 0 }}>
                                About Tianyin Worldtech - Electronics Manufacturer
                            </Typography>
                            <Typography variant="overline" color="primary.light" fontWeight="bold">
                                Trusted Electronics Manufacturer
                            </Typography>
                            <Typography variant="h2" fontWeight="bold">
                                Noida&apos;s Premier Charger & Power Adapter Manufacturer
                            </Typography>
                            <Typography variant="body1">
                                As an <strong>ISO 9001:2015 certified manufacturer</strong> based in Noida, Tianyin Worldtech combines 20+ years of expertise with cutting-edge SMT production lines to deliver:
                            </Typography>
                            <List>
                                {features.map((feature, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                                        <ListItemText primary={feature} />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="body1">
                                Serving <strong>50+ global clients</strong> with monthly production capacity of 1M+ units across our 20,000 sq.ft facility.
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }}>
                            <figure>
                                <Box
                                    component="img"
                                    src="/image/b1.jpg"
                                    alt="Tianyin Worldtech's manufacturing facility in Noida"
                                    sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
                                    loading="lazy"
                                />
                                <figcaption style={{ textAlign: 'center', marginTop: '8px', fontSize: '0.875rem' }}>
                                    Our ISO-certified production facility in Noida, Uttar Pradesh
                                </figcaption>
                            </figure>
                        </Grid>
                    </Grid>
                </Stack>

                {/* Core Values */}
                <Stack component="section" spacing={4} aria-labelledby="core-values">
                    <Typography variant="h2" id="core-values" align="center" fontWeight="bold">
                        Our Core Values
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid size={{ xs: 12, md: 6 }} component="article">
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h3" align="center" fontWeight="bold">
                                        <VerifiedUser color='primary' fontSize='large' sx={{ verticalAlign: 'middle', mr: 1 }} />
                                        Quality Commitment
                                    </Typography>
                                    <Typography align="center">
                                        Our <strong>16-step quality control process</strong> ensures every product meets:
                                    </Typography>
                                    <List dense>
                                        <ListItem>✓ IEC 60950-1 safety standards</ListItem>
                                        <ListItem>✓ RoHS compliance</ListItem>
                                        <ListItem>✓ 100% burn-in testing</ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }} component="article">
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h3" align="center" fontWeight="bold">
                                        <TrendingUp color='primary' fontSize='large' sx={{ verticalAlign: 'middle', mr: 1 }} />
                                        Sustainable Growth
                                    </Typography>
                                    <Typography align="center">
                                        Pioneering eco-friendly manufacturing through:
                                    </Typography>
                                    <List dense>
                                        <ListItem>● Energy-efficient production lines</ListItem>
                                        <ListItem>● 90%+ material recycling rate</ListItem>
                                        <ListItem>● Solar-powered facilities</ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Stack>

                <PolicyTabsSection />

                {/* Certifications */}
                <Stack component="section" alignItems={'center'} spacing={4} aria-labelledby="certifications">
                    <Stack>
                        <Typography variant="h2" id="certifications" align="center" fontWeight="bold" >
                            Certifications & Compliance
                        </Typography>
                        <Typography variant="body1" align="center">
                            Our certifications and compliance framework provide assurance to our customers that their products meet the highest standards of safety and quality.
                        </Typography>
                    </Stack>
                    <Grid container spacing={4} justifyContent="center">
                        {[
                            { img: '/certificates/crt.jpeg', alt: 'ISO 9001:2015 Certified' },
                        ].map((cert, index) => (
                            <Grid key={index}>
                                <img src={cert.img} alt={cert.alt} loading="lazy" style={{ height: 300 }} />
                            </Grid>
                        ))}
                    </Grid>

                </Stack>

                {/* Customers */}
                <Stack component="section" p={4} spacing={4} alignItems="center">
                    <Typography variant="h2" align="center" fontWeight="bold">
                        Our Customers
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {[
                            '/clients/airtel2.jpeg', '/clients/changhong.jpeg', '/clients/d2h.png',
                            '/clients/dishtv.jpeg', '/clients/dixon.png', '/clients/jio2.jpeg',
                            '/clients/khy.png', '/clients/lava.png', '/clients/LYF.jpg',
                            '/clients/nokia.png', '/clients/pie.png', '/clients/sercom.png',
                            '/clients/wingtech2.jpeg', '/clients/itel.png', '/clients/oraimo.png',
                            '/clients/sprocomm.png', '/clients/foxconn3.jpg', '/clients/karbonn.png',
                        ].map((img, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} key={index} >
                                <Card sx={{ p: 2, bgcolor: 'white' }}>
                                    <img src={img} alt="Client logo" loading="lazy" style={{ maxWidth: 150, alignSelf: "center", display: "block", margin: "auto", height: 50 }} />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>

            </MainContainer>




            {/* CTA */}
            <Stack
                sx={{
                    position: 'relative',
                    backgroundImage: "url('/about/partner2.avif')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    p: 4,
                    textAlign: 'center',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 1,
                    }
                }}
            >
                <Stack sx={{ position: 'relative', zIndex: 2, alignItems: 'center' }}>
                    <Typography variant="h2" fontWeight="bold">
                        Ready to Partner With Us?
                    </Typography>
                    <Typography variant="body1">
                        Contact our sales team for OEM solutions or bulk orders.
                    </Typography>
                    <Button variant="contained" color="primary" href="/contact" sx={{ mt: 2 }}>
                        Get Custom Quote
                    </Button>
                </Stack>
            </Stack>

            {/* FAQ Section */}
            <MainContainer component="section" sx={{ textAlign: 'center' }}>
                <FAQSection />
            </MainContainer>
        </>
    );
}
