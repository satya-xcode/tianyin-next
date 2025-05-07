'use client'
import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"@ts-expect-error"
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"@ts-expect-error"
import "swiper/css/navigation";
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"@ts-expect-error"
import "swiper/css/pagination";
import { Box, Button, Container, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

import useDeviceType from "../../hooks/ui/useDeviceType";
import Link from "next/link";

// Sample slides with videos
const slides = [
    {
        image: "slider/oem.webp", // Fallback image
        video: "videos/rep3.mp4", // Video URL
        title: "Your Partner in Innovation",
        highlight: "OEM Solutions",
        caption: "Our OEM solutions help you streamline your manufacturing process and increase productivity.",
    },
    {
        image: "slider/pcb.webp", // Fallback image
        video: "videos/rep1.mp4", // Video URL
        title: "Reliable and Efficient",
        highlight: "PCB Solutions",
        caption: "Transforming industries with modern technology... Our PCB solutions provide high-quality, reliable connections for your critical applications.",
    },
    {
        image: "slider/smt55.webp", // Fallback image
        title: "Innovate and Succeed",
        highlight: "SMT Solutions",
        caption: "We provide top-quality solutions for industrial growth... Our SMT solutions help you stay ahead of the competition with the latest technology and expertise.",
    }
];

// Text Animation (Fade In Up)
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Button Animation (Scale + Bounce)
const buttonBounce = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
        },
    },
};

function SwiperCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const theme = useTheme();
    const { isDesktop, isLargeDesktop, isMobile, isTablet } = useDeviceType()

    // Responsive height for the carousel
    const carouselHeight = isMobile ? "330px" : isTablet ? "370px" : isDesktop ? "400px" : isLargeDesktop ? "500px" : "700px";

    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            navigation={!isMobile} // Hide navigation arrows on mobile
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide
            style={{ border: 0 }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide style={{ border: 0 }} key={index}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: carouselHeight,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            border: 0
                        }}
                    >
                        {/* Video Background */}
                        {slide.video && (
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
                                    zIndex: 0,
                                }}
                            >
                                <source src={slide.video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}

                        {/* Image Fallback */}
                        {!slide.video && (
                            <Box
                                component={'img'}
                                width={"100%"}
                                height={"100%"}
                                alt="Smt department - Tianyin Worldtech India Pvt. Ltd."
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    border: 0,
                                    backgroundImage: `url(${slide?.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    zIndex: 0,
                                }}
                            />
                        )}

                        {/* Overlay */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity for better readability
                                zIndex: 1,
                            }}
                        />

                        {/* Content */}
                        <Container
                            component={motion.div}
                            key={activeIndex} // Forces re-animation on slide change
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                            sx={{
                                mt: theme.spacing(7),
                                backdropFilter: 'blur(4px)',
                                WebkitBackdropFilter: 'blur(4px)',
                                backgroundColor: "rgba(7, 8, 17, 0.2)",
                                padding: isMobile ? "4px" : "24px",
                                borderRadius: "10px",
                                color: "#fff",
                                maxWidth: isMobile ? "90%" : "600px",
                                textAlign: isMobile ? "center" : "left",
                                zIndex: 2,
                            }}
                        >
                            <Stack gap={theme.spacing(2)}>
                                {/* Title Animation */}
                                <motion.div variants={fadeInUp}>
                                    <Typography
                                        variant={'h1'}
                                        fontWeight="bold"
                                    >
                                        {slide.title}{" "}
                                        <span style={{ color: "#FFC107" }}>{slide.highlight}</span>
                                    </Typography>
                                </motion.div>

                                {/* Caption Animation */}
                                <motion.div variants={fadeInUp}>
                                    <Typography
                                        align={isMobile ? "center" : "left"}
                                        variant={'h3'}
                                    >
                                        {slide.caption}
                                    </Typography>
                                </motion.div>

                                {/* Button Animations */}
                                <Box display="flex" justifyContent={isMobile ? "center" : "flex-start"}>
                                    <motion.div variants={buttonBounce}>
                                        <Button
                                            component={Link}
                                            href='/contact'
                                            variant="contained"
                                            color="warning"
                                            size={isMobile ? "small" : "medium"}
                                        >
                                            Contact Now
                                        </Button>
                                    </motion.div>
                                </Box>
                            </Stack>
                        </Container>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default memo(SwiperCarousel);