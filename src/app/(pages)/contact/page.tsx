import { Container, Grid, Typography, Card, CardContent, IconButton, Stack, CardActionArea } from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import HeroSection from "@/components/shared/HeroSection";
import ContactForm from "./components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact | YourBrand',
    description: 'Welcome to YourBrand. Learn about our mission and services.',
};

export default function Home() {

    // const [isCopied, setIsCopied] = useState(false);


    // const phoneNumber = '911204109448'; // No + and spaces removed
    // const message = 'Hello, I would like to get in touch with you.';

    // const onWhatsappClick = () => {
    //     const formattedPhoneNumber = `+${phoneNumber}`; // Add + for international format
    //     const url = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;
    //     window.open(url, '_blank'); // Open in a new tab/window
    // };

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
                showBreadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact OEM Solutions", href: "/contact" },
                ]}
                aria-label="OEM Manufacturing Contact"
                showBackButton
            />


            <Stack spacing={4} p={4}>

                <Grid container spacing={4} alignItems={'center'} justifyContent={'center'}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} data-aos="flip-right">
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
                                    {/* <IconButton 
                                    // onClick={() => {
                                    //     navigator.clipboard.writeText('+911204109448');
                                    //     setIsCopied(true);
                                    //     setTimeout(() => setIsCopied(false), 2000);
                                    // }}
                                    >
                                        {isCopied ? <CheckCircleOutline color="success" /> : <ContentCopy />}
                                    </IconButton> */}
                                </Stack>
                            </CardContent>

                        </Card>
                    </Grid>
                    {/* <Grid size={{xs:12,sm:6,md:3}}  data-aos="fade-up">
                        <Card sx={{ minHeight: 200 }}>
                            <CardActionArea onClick={onWhatsappClick} sx={{ minHeight: 200 }}>
                                <CardContent>
                                    <IconButton sx={{ color: "#1976D2" }}>  <WhatsApp fontSize="large" color="success" />    </IconButton>
                                    <Typography component={'div'} variant={'body1'} fontWeight="bold">
                                        Whatsapp
                                    </Typography>
                                    <Typography variant={'body1'} color="text.secondary" sx={{ mt: 1 }}>
                                        +91 1204109448
                                    </Typography>
                                </CardContent>

                            </CardActionArea>
                        </Card>
                    </Grid> */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} data-aos="flip-left">
                        <Card sx={{ minHeight: 200 }}>
                            {/* <CardActionArea href="https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&cc=someone@ola.example&bcc=someone.else@example.com&su=SUBJECT&body=BODY" target="_blank" sx={{ minHeight: 200 }}> */}
                            <CardActionArea href={`https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`} target="_blank" sx={{ minHeight: 200 }}>
                                <CardContent>
                                    <IconButton sx={{ color: "#1976D2" }}>  <Email fontSize="large" color="error" />    </IconButton>
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

            </Stack>
            {/* Contact Form */}

            <Stack gap={4}>
                <Container>
                    <Stack mb={4} alignItems={'center'}>
                        <Typography variant={'h2'} fontWeight="bold" align="center">
                            Get in Touch
                        </Typography>

                    </Stack>



                    <ContactForm />




                </Container>
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
                    <iframe
                        title="Charger Manufacturing Facility Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224243.26257035806!2d77.16644393873901!3d28.575738492064293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce9abf4df69f3%3A0x3e15387dc811e242!2sTianyin%20worldtech%20India%20Pvt%20ltd%20head%20office!5e0!3m2!1sen!2sin!4v1713435678681!5m2!1sen!2sin"
                        width="100%"
                        height="600"
                        color="black"
                        style={{ border: 0 }}
                        // allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </Stack>



            </Stack >


        </>
    );
};


