'use client'
import { Typography, Box, useTheme, Stack, Container, Button, Breadcrumbs, Link, Paper, CardActionArea } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
import useDeviceType from "../../hooks/ui/useDeviceType";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
    title: any;
    description: string;
    backgroundImage: string;
    ctaText?: string;
    onCtaClick?: () => void;
    showBreadcrumbs?: boolean;
    breadcrumbs?: { label: string; href: string }[];
    showBackButton?: boolean;
}

const HeroSection = ({
    title,
    description,
    backgroundImage,
    ctaText,
    onCtaClick,
    showBreadcrumbs = false,
    breadcrumbs = [],
    showBackButton = false,
}: HeroSectionProps) => {
    const theme = useTheme();
    const { isMobile } = useDeviceType()
    const navigate = useRouter();


    return (
        <Box
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                color: "white",
                textAlign: "center",
                position: "relative",
                height: { xs: '250px', sm: '300px', md: '400px' },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
                },
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.5)",
            }}
        >
            <Container disableGutters maxWidth={false} sx={{ position: "relative", zIndex: 1, height: '100%' }}>
                {/* Breadcrumbs and Back Button */}

                <Stack height={'100%'} alignItems={'center'} >
                    {/* <Toolbar /> */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        alignSelf={'flex-start'}
                        gap={theme.spacing(2)}

                        flex={0}
                        style={{ padding: theme.spacing(2), display: isMobile ? 'none' : 'flex' }}
                    >
                        {showBackButton && (

                            <Paper variant="elevation" sx={{ bgcolor: 'rgba(4, 57, 107, 0.5)' }}>
                                <Stack onClick={() => navigate.back()} component={CardActionArea} style={{ padding: '5px 10px' }} direction={'row'} alignItems={'center'}>
                                    <ArrowBackIosNew color="warning" />
                                    <Typography>Back</Typography>
                                </Stack>
                            </Paper>
                        )}
                        {showBreadcrumbs && (
                            <Breadcrumbs aria-label="breadcrumb" sx={{ color: 'white' }}>
                                {breadcrumbs.map((crumb, index) => (
                                    <Link
                                        key={index}
                                        underline="hover"

                                        sx={{ fontWeight: 'bold', color: 'secondary.light', ':hover': { color: 'orange' } }}
                                        href={crumb.href}
                                    >
                                        {crumb.label}
                                    </Link>
                                ))}
                                <Typography color="text.primary" variant={'body1'}>{title}</Typography>
                            </Breadcrumbs>
                        )}

                    </Stack>
                    {/* Main Content (Centered) */}
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        alignSelf={'center'}
                        flex={1}

                        sx={{ textAlign: 'center', p: theme.spacing(2) }}
                    >
                        <Typography variant={'h2'} fontWeight="bold" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                            {title}
                        </Typography>

                        <Typography variant={'body1'} sx={{ maxWidth: '800px', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                            {description}
                        </Typography>

                        {/* CTA Button */}
                        {ctaText && (
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={onCtaClick}
                                sx={{ fontWeight: 'bold' }}
                            >
                                {ctaText}
                            </Button>
                        )}
                    </Stack>
                </Stack>

            </Container>
        </Box>
    );
};

export default HeroSection;