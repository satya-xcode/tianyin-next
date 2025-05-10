'use client'
import { WhatsApp } from '@mui/icons-material'
import { Button, Grid, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'


const phoneNumber = '911204109448'; // No + and spaces removed
const message = 'Hello, I would like to get in touch with you.';

const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

function ExpertGuide() {
    const { spacing } = useTheme()
    return (
        <Stack
            sx={{
                position: "relative",
                backgroundImage: "url('/slider/smt1.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                p: spacing(4),
                my: spacing(4),
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
            <Stack sx={{ position: "relative", zIndex: 2, minHeight: 200, justifyContent: 'center' }}>
                <Grid container alignItems="center" spacing={4} data-aos="fade-up">
                    <Grid size={{ xs: 12, md: 8 }} >
                        <Typography variant={'h2'} fontWeight="bold" color="white">
                            Expert Guidance for Your Industrial Needs
                        </Typography>
                        <Typography variant={'body1'} color="rgba(255, 255, 255, 0.8)" sx={{ mt: 2 }}>
                            Our team of experienced professionals is dedicated to providing personalized support and tailored manufacturing solutions to help you achieve your goals.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }} textAlign="center">
                        <Button
                            variant="contained"
                            color="success"
                            size="large"
                            onClick={handleClick}
                            startIcon={<WhatsApp />}
                            sx={{
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                boxShadow: '0px 4px 15px rgba(0, 128, 0, 0.3)',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0px 6px 20px rgba(0, 128, 0, 0.4)',
                                },
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Contact Now
                        </Button>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    )
}

export default ExpertGuide