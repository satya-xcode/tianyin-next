'use client'
import { Build, Computer, ElectricalServices, Factory, Leaderboard, Memory, People, PrecisionManufacturing, Verified } from "@mui/icons-material";
import { Box, Card, CardContent, Stack, Typography, useTheme } from "@mui/material";
// @ts-expect-error: Importing Splide and SplideSlide from @splidejs/react-splide is not typed correctly.
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";


// Define capabilities data
const capabilities = [
    { icon: <Factory fontSize="large" sx={{ fontSize: 100 }} />, text: "250,000 SQ. FT. AREA FOR MANUFACTURING" },
    { icon: <PrecisionManufacturing fontSize="large" sx={{ fontSize: 100 }} />, text: "38 Assembly & 23 Packing LINES" },
    { icon: <Memory fontSize="large" sx={{ fontSize: 100 }} />, text: "7 SMT & MI Lines" },
    { icon: <Build fontSize="large" sx={{ fontSize: 100 }} />, text: "30 Injection Molding Machines" },
    { icon: <ElectricalServices fontSize="large" sx={{ fontSize: 100 }} />, text: "24*7 Electricity" },
    { icon: <Leaderboard fontSize="large" sx={{ fontSize: 100 }} />, text: "5+ Million Monthly Capacity" },
    { icon: <People fontSize="large" sx={{ fontSize: 100 }} />, text: "1500+ Skilled Workforce" },
    { icon: <Computer fontSize="large" sx={{ fontSize: 100 }} />, text: "Robust IT Infrastructure" },
    { icon: <Verified fontSize="large" sx={{ fontSize: 100 }} />, text: "Reliability Lab" },
];

export default function AutoPlaySplideCarousel() {
    const { spacing } = useTheme()
    return (
        <Stack spacing={spacing(4)}>
            <Stack alignItems={'center'}>
                <Typography data-aos='fade-up' variant={'h2'} fontWeight="bold" align="center">
                    Our Capabilities
                </Typography>
                <Typography variant={'body1'} align="center" color="text.secondary">
                    Driving excellence with cutting-edge technology.
                </Typography>
            </Stack>
            <Splide
                options={{
                    type: "loop",
                    drag: "free",
                    perPage: 5,
                    gap: 3,
                    autoScroll: {
                        pauseOnHover: true,
                        pauseOnFocus: true,
                        rewind: true,
                        speed: 2,
                    },
                    breakpoints: {
                        1200: {
                            perPage: 2,
                        },
                    },
                    pagination: false, // Add this line to disable indicators
                    arrows: false, // Disable navigation buttons
                }}
                onMove={(splide: Splide) => {
                    const activeSlide = splide.Components.Elements.slides[splide.index];
                    activeSlide.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                extensions={{ AutoScroll }}
            >
                {capabilities.map((capability, index) => (
                    <SplideSlide key={index} style={{ display: "flex", justifyContent: "center", padding: 1 }}>
                        <Card
                            sx={{
                                width: "300px", // Adjusted width
                                minHeight: "150px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                justifyContent: 'center'
                            }}
                        >
                            <CardContent>
                                <Box sx={{ color: "primary.main" }}>{capability.icon}</Box>
                                <Typography variant={'body1'} fontWeight={500}>{capability.text}</Typography>
                            </CardContent>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Stack>

    );
}
