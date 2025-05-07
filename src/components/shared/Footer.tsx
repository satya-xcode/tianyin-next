'use client'
import { Grid, Typography, Box, IconButton, useTheme, Stack, CardMedia } from "@mui/material";
import { Facebook, LinkedIn, Mail, Phone, LocationOn, X, Instagram } from "@mui/icons-material";
// import logo from '/logo/logo.png'
import Link from "next/link";
const Footer = () => {
    const { spacing } = useTheme();
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "primary.dark",
                color: "#fff",
                position: "relative", // Ensure the footer is positioned relative for absolute child elements
                overflow: "hidden", // Hide overflow from the video
            }}
        >
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0, // Place the video behind the content
                    opacity: 0.3, // Adjust opacity to make the video subtle
                }}
            >
                <source src="videos/waves.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay to darken the video */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark overlay for better text visibility
                    zIndex: 1, // Place the overlay above the video but below the content
                }}
            />

            {/* Content */}
            <Stack p={spacing(8)} position="relative" zIndex={2}> {/* Ensure content is above the video and overlay */}
                <Grid container spacing={spacing(4)} justifyContent={'center'}>
                    {/* Company Info */}
                    <Grid display={'flex'} flexDirection={'column'} alignItems={'center'} size={{ xs: 12, sm: 6, md: 3 }} >
                        <Link href=".">
                            <img
                                src={'logo/logo.png'}
                                alt="Tianyin Worldtech India Pvt Ltd Logo"
                                title="Tianyin Worldtech India Pvt Ltd"
                                loading="lazy"
                                width="250"
                                height="80"
                                style={{ objectFit: 'contain' }}
                            />
                        </Link>
                        <Typography variant={'h3'} fontWeight="bold">Tianyin Worldtech India Pvt Ltd.</Typography>
                        <Typography variant={'body1'} sx={{ mt: 1, color: "gray" }}>
                            Leading manufacturer of high-tech electronic components with cutting-edge technology.
                        </Typography>
                    </Grid>

                    {/* Quick Links */}
                    <Grid size={{ xs: 12, sm: 6, md: 2 }} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Typography variant={'h3'} fontWeight="bold">Quick Links</Typography>
                        <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column' }}>
                            <Link href="." style={{ color: 'inherit' }}>Home</Link>
                            <Link href="about" style={{ color: 'inherit' }}>About Us</Link>
                            <Link href="contact" style={{ color: 'inherit' }}>Contact</Link>
                            <Link href="career" style={{ color: 'inherit' }}>Career</Link>
                            <Link href="blog" style={{ color: 'inherit' }}>Blog</Link>
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Typography variant={'h3'} fontWeight="bold">Contact</Typography>
                        <Box sx={{ mt: 1 }}>
                            <Typography align="left" variant={'body1'} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                <LocationOn sx={{ mr: 1 }} /> B-204, Phase-II, Gautam Budha Nagar, Noida. Uttar Pradesh - 201305.
                            </Typography>
                            <Typography align="left" variant={'body1'} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                <Mail sx={{ mr: 1 }} /> tianyinindia@gmail.com
                            </Typography>
                            <Typography align="left" variant={'body1'} sx={{ display: "flex", alignItems: "center" }}>
                                <Phone sx={{ mr: 1 }} /> +91 1204109448
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Social Media */}
                    <Grid size={{ xs: 12, sm: 6, md: 3 }} display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Stack alignItems={'center'}>
                            <Typography variant={'body1'} fontWeight="bold">Follow Us</Typography>
                            <Box sx={{ display: "flex", flexDirection: 'row', gap: spacing(2) }}>
                                <IconButton href="https://www.facebook.com/share/1B3wZTJCHF/" color="primary" target="_blank">
                                    <Facebook />
                                </IconButton>
                                <IconButton href="https://www.instagram.com/tianyinworldtechindia?igsh=MWFhZ3J3M3pqajBtaA==&utm_source=ig_contact_invite" color="error" target="_blank">
                                    <Instagram />
                                </IconButton>
                                <IconButton href="https://x.com/i/flow/login?redirect_after_login=%2FTianyinIndia" target="_blank">
                                    <X />
                                </IconButton>
                                <IconButton href="https://linkedin.com" color="info" target="_blank">
                                    <LinkedIn />
                                </IconButton>
                            </Box>
                            <CardMedia
                                image="/image/makeindia.png"
                                component={'img'}
                                alt="make in india"
                                loading="lazy"
                                width={200}
                                height={200}
                                sx={{ objectFit: 'contain' }}
                            />
                        </Stack>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <Typography variant={'body1'} align="center" color="gray" sx={{ mt: 3 }}>
                    © {new Date().getFullYear()} Tianyin Worldtech India Pvt Ltd. All rights reserved.
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;