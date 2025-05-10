import { Grid, Typography, Stack, Paper } from "@mui/material";
import CareerForm from "./components/CareerForm";
import HeroSection from "@/components/shared/HeroSection";
import SwiperEmployeeCarousel from "@/components/slider/SwiperEmployeeCarousel";
import { Metadata } from "next";
import MainContainer from "@/components/shared/MainContainer";

// Data for 'Why Join Us' section
const whyJoinData = [
    {
        title: 'Why Join Our Manufacturing Team?',
        points: [
            'Work on cutting-edge charger designs and adapter prototypes',
            'ISO-certified production environment with advanced SMT lines',
            'Continuous training in electronics manufacturing processes',
            'Competitive salaries with performance bonuses',
            'Health insurance and wellness programs',
        ],
    },
    {
        title: 'Our Recruitment Process',
        points: [
            '1. Application Review (48hr response time)',
            '2. Technical Assessment (Circuit analysis/DFM evaluation)',
            '3. Manufacturing Process Interview',
            '4. HR Discussion & Offer Letter',
        ],
    },
];

export const metadata: Metadata = {
    title: 'Tianyin Worldtech | Career Opportunities in Mobile Charger Manufacturing',
    description:
        'Join Tianyin Worldtech and be part of our cutting-edge charger and adapter manufacturing team. Explore career opportunities in Noida and help shape the future of OEM products.',
    keywords:
        'career opportunities, mobile charger manufacturer jobs, OEM manufacturing careers, electronics production jobs, Tianyin Worldtech careers, Noida job openings',
    generator: 'Next.js 15.3',
    applicationName: 'Tianyin Worldtech Careers',
    creator: 'Tianyin Worldtech India Pvt. Ltd.',
    publisher: 'Tianyin Worldtech India Pvt. Ltd.',
    authors: [{ name: 'Tianyin Worldtech Team', url: 'https://tianyin.in/career' }],
    alternates: {
        canonical: 'https://tianyin.in/career',
    },
    openGraph: {
        title: 'Tianyin Worldtech | Join Our Team in Mobile Charger Manufacturing',
        description:
            'Discover exciting career opportunities with Tianyin Worldtech. Join our innovative manufacturing team and help drive excellence in mobile charger production.',
        url: 'https://tianyin.in/career',
        siteName: 'Tianyin Worldtech Careers',
        images: [
            {
                url: 'https://tianyin.in/image/banners/career23.jpg',
                width: 1200,
                height: 630,
                alt: 'Join Tianyin Worldtech - Career Opportunities in Manufacturing',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tianyin Worldtech | Careers in Mobile Charger Manufacturing',
        description:
            'Looking for a career in mobile charger manufacturing? Explore job openings at Tianyin Worldtech and be part of an innovative team in Noida.',
        creator: '@tianyinworldtech',
        images: ['https://tianyin.in/image/banners/career23.jpg'],
    },
};

const CareerPage = () => {
    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title="Join Our OEM Innovation Team"
                description="Shape the future of charger and adapter production. Collaborate on 20+ OEM projects annually in our Noida manufacturing facility."
                backgroundImage={'/image/banners/career245.jpg'}
                showBreadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Manufacturing Careers", href: "/career" },
                ]}
                aria-label="Electronics Manufacturing Careers"
                showBackButton
            />

            {/* SEO Background for Search Engines */}
            <Stack spacing={4} sx={{ position: 'absolute', visibility: 'hidden' }}>
                <Typography component="h1" variant="subtitle2">
                    Join Our OEM Charger Manufacturing Team
                </Typography>
                <Typography component={'p'} variant="subtitle2">
                    Lead innovation in power adapter design and electronics production with 20+ annual OEM projects.
                </Typography>
            </Stack>

            {/* Why Join Us Section */}
            <MainContainer>
                <Grid container spacing={4} sx={{ flex: 1, flexDirection: 'column', alignItems: 'center' }} component="section">
                    {whyJoinData.map((item, index) => (
                        <Grid size={{ xs: 12 }} key={index} data-aos="fade-down" component="article">
                            <Stack gap={4}>
                                <Stack alignItems={'center'}>
                                    <Typography variant={'h2'} fontWeight="bold" align="center" aria-label={item.title}>
                                        {item.title}
                                    </Typography>
                                </Stack>
                                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                                    {item.points.map((point, pointIndex) => (
                                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={pointIndex}>
                                            <Paper variant="elevation" elevation={0} sx={{ p: 2 }} component="div">
                                                <Typography variant={'body1'} align="center" component="p">
                                                    • {point}
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </MainContainer>
            {/* Employee Testimonials Section */}
            <Stack py={4}>
                <Stack alignItems={'center'}>
                    <Typography
                        data-aos="fade-down"
                        variant={'h2'}
                        fontWeight="bold"
                        align="center"
                        component="h2"
                        id="testimonials-heading"
                    >
                        Employee Testimonials
                    </Typography>
                    <Typography data-aos="fade-down" variant={'body1'} align="center">
                        Working here has been a fantastic experience. The team is supportive, and the opportunities are endless.
                    </Typography>
                </Stack>

                <SwiperEmployeeCarousel />
            </Stack>

            {/* Career Form Section */}
            <CareerForm />
        </>
    );
};

export default CareerPage;
