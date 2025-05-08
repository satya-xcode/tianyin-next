import { Grid, Typography, Stack, Paper, } from "@mui/material";
import CareerForm from "./components/CareerForm";
import HeroSection from "@/components/shared/HeroSection";
import SwiperEmployeeCarousel from "@/components/slider/SwiperEmployeeCarousel";
import { Metadata } from "next";
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
    title: 'Career | YourBrand',
    description: 'Welcome to YourBrand. Learn about our mission and services.',
};


const CareerPage = () => {

    return (
        <>

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


            {/* Background Shapes */}
            <Stack sx={{ position: 'absolute', visibility: 'hidden' }}>
                <Typography component="h1" variant="subtitle2" gutterBottom>
                    Join Our OEM Charger Manufacturing Team
                </Typography>
                <Typography component={'p'} variant="subtitle2">
                    Lead innovation in power adapter design and electronics production with 20+ annual OEM projects
                </Typography>
            </Stack>
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
                                        <Paper variant="elevation" sx={{ p: 2 }} component="div">
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

            <Stack sx={{ display: "flex", flexDirection: 'column', gap: 4 }}>
                <Stack alignItems={'center'}>
                    <Typography
                        data-aos="fade-down"
                        variant={'h2'}
                        fontWeight="bold" align="center"
                        component="h2"
                        id="testimonials-heading"
                    >Employee Testimonials</Typography>

                </Stack>
                <Typography data-aos="fade-down" variant={'body1'} align="center">Working here has been a fantastic experience. The team is supportive, and the opportunities are endless</Typography>
                <SwiperEmployeeCarousel />

            </Stack>
            <CareerForm />
        </>
    );
};

export default CareerPage;
