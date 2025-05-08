'use client'
import React from 'react'
import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { industries } from '@/data/Industries';
import useDeviceType from '@/hooks/ui/useDeviceType';
import { doubleLineSort, singleLineSort } from '../animations/css/export/textSortStyles';

function LeadingOem() {
    const { isMobile, isDesktop, isTablet } = useDeviceType();
    const cardMediaSize = isMobile ? 130 : isTablet ? 150 : isDesktop ? 170 : 200;

    return (
        <Stack spacing={4} component="section" sx={{ px: { xs: 2, sm: 4, md: 8 }, py: { xs: 4, sm: 6, md: 8 } }}>
            <Stack gap={2} textAlign="center">
                <Typography
                    component='h2'
                    data-aos='fade-up'
                    variant='h1'
                    fontWeight="bold"
                    sx={{ color: 'primary.main' }}
                >
                    Leading OEM Manufacturer of Mobile Chargers, Adapters, and Telecom Equipment
                </Typography>

                <Typography
                    variant='h5'
                    component='p'
                    color="text.secondary"
                >
                    Empowering businesses with end-to-end electronic manufacturing solutions using modern infrastructure and engineering excellence.
                </Typography>
            </Stack>

            <Grid container spacing={4} justifyContent="center">
                {industries.map((industry, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index} data-aos={industry.dataAos}>
                        <Card
                            elevation={3}
                            sx={{
                                height: '100%',
                                transition: 'transform 0.3s ease',
                                '&:hover': { transform: 'translateY(-5px)' }
                            }}
                        >
                            <CardActionArea
                                component={Link}
                                href={industry.category}
                                sx={{ height: '100%' }}
                            >
                                <CardContent
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        gap: 2,
                                        textAlign: 'center'
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        loading="lazy"
                                        height={cardMediaSize}
                                        width={cardMediaSize}
                                        image={industry.image}
                                        alt={`${industry.alt} - Tianyin Worldtech`}
                                        sx={{ objectFit: 'contain', maxWidth: cardMediaSize }}
                                    />

                                    <Box display="flex" alignItems="center" gap={2} justifyContent="center">
                                        <Avatar variant="rounded" sx={{ bgcolor: 'warning.main' }}>
                                            {industry.icon}
                                        </Avatar>
                                        <Box>
                                            <Typography
                                                variant='h3'
                                                fontWeight="bold"
                                                sx={{ ...singleLineSort }}
                                            >
                                                {industry.title}
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                                sx={{ ...singleLineSort }}
                                            >
                                                {industry.subtitle}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Typography
                                        variant='body1'
                                        color='text.secondary'
                                        sx={{ ...doubleLineSort }}
                                    >
                                        {industry.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

export default LeadingOem;
