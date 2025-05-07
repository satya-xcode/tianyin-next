'use client'
import { Accordion, AccordionSummary, Grid, AccordionDetails, Typography, Box, useTheme, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
    {
        question: "Why do people choose us?",
        answer: "We provide high-quality industrial solutions with a commitment to excellence, backed by years of experience.",
    },
    {
        question: "Our working method",
        answer: "We follow a streamlined and efficient approach, ensuring the best results for our customers with cutting-edge technology.",
    },
    {
        question: "How can I get support?",
        answer: "Our support team is available 24/7 to assist you. You can contact us via email, phone, or live chat.",
    },
    {
        question: "Our mission for 2030",
        answer: "By 2030, we aim to be the industry leader in sustainable and innovative manufacturing solutions.",
    },
];

const FAQSection = () => {
    const { spacing } = useTheme()

    return (
        <Stack p={4}>
            <Grid container spacing={spacing(4)}>
                <Grid size={{ xs: 12, md: 6 }} gap={spacing(2)} display={'flex'} flexDirection={'column'}>
                    <Typography data-aos='fade-up' variant={'body1'} color="primary.light" fontWeight="bold">
                        What do you want to know?
                    </Typography>
                    <Typography data-aos='fade-up' variant={'h1'} fontWeight="bold">
                        Common Questions About Our Company
                    </Typography>
                    {faqData?.map((faq, index) => (
                        <Accordion key={index} >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight="bold">{faq?.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>{faq?.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Grid>

                <Grid size={{ xs: 12, md: 6 }} gap={spacing(2)} display={'flex'} flexDirection={'column'} textAlign="center">
                    <Box data-aos='fade-up' sx={{ position: "relative", maxWidth: "100%", overflow: "hidden" }}>
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/k-ANiLQGRoU?si=J-fD0HUNPsJGLNMa"
                            title="Company Introduction"
                            allowFullScreen
                        />
                    </Box>


                    <Typography data-aos='fade-up' variant={'h2'} fontWeight="bold">
                        Inside the Professional PCB Assembly Process at a Leading Tianyin Company
                    </Typography>
                    <Typography data-aos='fade-up' variant={'body1'} color="textSecondary">
                        We have **30+ years of experience** in industrial economic development with trusted clients.
                    </Typography>
                    <Box fontWeight="bold" data-aos='fade-up'>
                        Call us - <span style={{ color: "#1976d2" }}>+91 1204109448</span>
                    </Box>
                </Grid>
            </Grid>
        </Stack>

    );
};

export default FAQSection;
