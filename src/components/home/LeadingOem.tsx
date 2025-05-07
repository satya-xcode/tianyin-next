'use client'
import React from 'react'
import { Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { industries } from '@/data/Industries';
import useDeviceType from '@/hooks/ui/useDeviceType';
import { doubleLineSort, singleLineSort } from '../animations/css/export/textSortStyles';

function LeadingOem() {
    const { isMobile, isDesktop, isTablet } = useDeviceType()
    const cardMediaSize = isMobile ? 130 : isTablet ? 150 : isDesktop ? 170 : 200
    return (
        <Stack p={4} spacing={4}>
            <Stack gap={2}>
                <Typography component={'h3'} data-aos='fade-up' variant={'h1'} fontWeight="bold" align="center">
                    Leading OEM Solutions Provider for Chargers, Adapters, Telecom Equipment, and POE Technology
                </Typography>
                <Typography variant={'h3'} component={"h5"} align="center" color="text.secondary">
                    Powering connectivity and efficiency with cutting-edge manufacturing expertise.
                </Typography>
            </Stack>

            <Grid container spacing={4} justifyContent="center">
                {industries.map((industry, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index} data-aos={industry.dataAos}>
                        <Card>
                            <CardActionArea
                                component={Link}
                                sx={{ height: "100%" }}
                                href={industry.category}
                            >
                                <CardContent sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: 2 }}>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            alignSelf: "center",
                                            objectFit: "contain"
                                        }}
                                        loading="lazy"
                                        height={cardMediaSize}
                                        width={cardMediaSize}
                                        image={industry.image}
                                        alt={`${industry.alt} - Tianyin Worldtech`}
                                    />
                                    <Stack gap={2}>
                                        <Box display="flex" alignItems="center" gap={2}>
                                            <Avatar variant="rounded" sx={{ bgcolor: 'warning.main' }}>
                                                {industry.icon}
                                            </Avatar>
                                            <Box>
                                                <Typography
                                                    sx={{ ...singleLineSort }}
                                                    variant={'h3'} fontWeight="bold">
                                                    {industry.title}
                                                </Typography>
                                                <Typography
                                                    sx={{ ...singleLineSort }}
                                                    variant="subtitle2" color="text.secondary">{industry.subtitle}</Typography>
                                            </Box>
                                        </Box>
                                        <Typography
                                            sx={{ ...doubleLineSort }}
                                            variant={'body1'}>
                                            {industry.description}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

        </Stack>
    )
}

export default LeadingOem