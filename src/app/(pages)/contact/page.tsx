import { Grid, Typography, Card, CardContent, IconButton, Stack, CardActionArea } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import HeroSection from "@/components/shared/HeroSection";
import ContactForm from "./components/ContactForm";
import { Metadata } from "next";
import MainContainer from "@/components/shared/MainContainer";

export const metadata: Metadata = {
    title: 'Contact Us | Tianyin Worldtech - OEM Charger Manufacturer in Noida, India',
    description: 'Get in touch with Tianyin Worldtech, a leading OEM mobile charger manufacturer in Noida. We specialize in custom charger designs, bulk production, and global OEM partnerships.',
    keywords: 'Contact Tianyin Worldtech, OEM Charger Manufacturer Noida, Mobile Charger Supplier, Contact Electronics Manufacturer India, Tianyin Worldtech India',
    generator: 'Next.js 15.3',
    applicationName: 'Tianyin Worldtech',
    creator: 'Tianyin Worldtech India Pvt. Ltd.',
    publisher: 'Tianyin Worldtech India Pvt. Ltd.',
    authors: [{ name: 'Tianyin Worldtech Team', url: 'https://tianyin.in' }],
    alternates: {
        canonical: 'https://tianyin.in/contact',
    },
    openGraph: {
        title: 'Contact Us | Tianyin Worldtech - Leading OEM Charger Manufacturer',
        description: 'Reach out to Tianyin Worldtech for custom mobile charger solutions, OEM manufacturing, and partnership inquiries. Serving global clients from Noida, India.',
        url: 'https://tianyin.in/contact',
        siteName: 'Tianyin Worldtech',
        images: [
            {
                url: 'https://tianyin.in/og-image-contact.jpg',
                width: 1200,
                height: 630,
                alt: 'Tianyin Worldtech Contact - OEM Mobile Charger Manufacturer',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us | Tianyin Worldtech - OEM Charger Manufacturer',
        description: 'Get in touch with Tianyin Worldtech for custom chargers and OEM manufacturing. Serving global clients from Noida, India.',
        creator: '@tianyinworldtech',
        images: ['https://tianyin.in/og-image-contact.jpg'],
    },
};


export default function Home() {
    const companyEmail = "tianyinindia@gmail.com";
    const subject = "Enquiry from Website";
    const body = "Hello, I would like to get in touch with you.";

    return (
        <>
            {/* Hero Section */}
            <HeroSection
                title="OEM Charger & Adapter Manufacturing Solutions"
                description="Connect with India's leading electronics manufacturer for custom charger designs, bulk adapter production, and OEM partnerships."
                backgroundImage={'/image/banners/bg.jpg'}
                // alt="OEM charger and adapter manufacturing at Tianyin Worldtech"
                showBreadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact OEM Solutions", href: "/contact" },
                ]}
                aria-label="OEM Manufacturing Contact"
                showBackButton
            />

            <MainContainer>
                <Grid container spacing={4} alignItems={'center'} justifyContent={'center'}>
                    {/* Phone Card */}
                    <Grid size={{ xs: 12, sm: 6 }} data-aos="flip-right">
                        <Card sx={{ minHeight: 200 }}>
                            <CardContent>
                                <IconButton sx={{ color: "#1976D2" }}>
                                    <Phone fontSize="large" />
                                </IconButton>
                                <Typography component={'div'} variant={'body1'} fontWeight="bold">
                                    Call Us
                                </Typography>
                                <Stack direction={'row'} alignItems={'center'} gap={2}>
                                    <Typography itemProp="telephone" variant={'body1'} color="text.secondary" sx={{ mt: 1 }}>
                                        +91 1204109448
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Email Card */}
                    <Grid size={{ xs: 12, sm: 6 }} data-aos="flip-left">
                        <Card sx={{ minHeight: 200 }}>
                            <CardActionArea href={`https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`} target="_blank" rel="noopener noreferrer" sx={{ minHeight: 200 }}>
                                <CardContent>
                                    <IconButton sx={{ color: "#1976D2" }}>
                                        <Email fontSize="large" color="error" />
                                    </IconButton>
                                    <Typography component={'div'} variant={'body1'} fontWeight="bold">
                                        Email Us
                                    </Typography>
                                    <Typography itemProp="email" variant={'body1'} color="text.secondary" sx={{ mt: 1 }}>
                                        tianyinindia@gmail.com
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <ContactForm />
            </MainContainer>
            {/* Location Section */}
            <Stack component="section" gap={2} aria-labelledby="location-heading">
                <Stack alignItems={'center'}>
                    <Typography variant={'h2'} id="location-heading" fontWeight="bold" align="center">
                        Our Location
                    </Typography>
                </Stack>

                <Stack direction={'row'} gap={2} alignItems={'center'} justifyContent={'center'}>
                    <IconButton>
                        <LocationOn fontSize="large" />
                    </IconButton>
                    <address itemScope itemType="https://schema.org/PostalAddress">
                        <Typography component="span" itemProp="name">Tianyin Worldtech India Pvt Ltd</Typography><br />
                        <span itemProp="streetAddress">B-204, Phase-II, Gautam Budha Nagar</span><br />
                        <span itemProp="addressLocality">Noida</span>,
                        <span itemProp="addressRegion">Uttar Pradesh</span> -
                        <span itemProp="postalCode">201305</span>
                    </address>
                </Stack>

                {/* Google Maps Embedded */}
                <iframe
                    title="Charger Manufacturing Facility Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224243.26257035806!2d77.16644393873901!3d28.575738492064293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9abf4df69f3%3A0x3e15387dc811e242!2sTianyin%20worldtech%20India%20Pvt%20ltd%20head%20office!5e0!3m2!1sen!2sin!4v1713435678681!5m2!1sen!2sin"
                    width="100%"
                    height="600"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Stack>

        </>
    );
};
