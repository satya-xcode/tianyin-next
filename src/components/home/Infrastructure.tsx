'use client'
import useDeviceType from '@/hooks/ui/useDeviceType'
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { cardImageZoomStyles } from '../animations/css/export/cardImageZoomStyles'
import { doubleLineSort, singleLineSort } from '../animations/css/export/textSortStyles'
import { infrastructureData } from '@/data/InfrastructureData'

function Infrastructure() {
    const { spacing } = useTheme()
    const { isDesktop, isTablet, isMobile } = useDeviceType()
    return (
        <Stack spacing={spacing(4)}>
            <Stack alignItems={'center'}>
                <Typography data-aos='fade-up' component={'h4'} variant={'h2'} fontWeight="bold" align="center">
                    Our Infrastructure
                </Typography>

                <Typography variant={'body1'} component={'p'} align="center" color="text.secondary">
                    High-tech manufacturing with industry-leading precision.
                </Typography>
            </Stack>

            <Grid container spacing={4}>
                {infrastructureData?.map((item, index) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={index} data-aos={item.dataAos}>
                        <Card>
                            <CardActionArea component={Link} href={`/infrastructure/${item.link}`}>
                                <Stack direction={isMobile || isTablet || isDesktop ? "column" : "row"}>
                                    <CardMedia
                                        component="img"
                                        width={isMobile || isTablet || isDesktop ? "100%" : 400}
                                        height={isMobile || isTablet || isDesktop ? 200 : 250}
                                        sx={{
                                            objectFit: "cover",
                                            ...cardImageZoomStyles
                                        }}
                                        loading="lazy"
                                        image={item.image}
                                        alt={item.title}
                                    />
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            {item.icon}
                                            <Typography sx={{ ...singleLineSort }} variant={'h3'} fontWeight="bold">
                                                {item.title}
                                            </Typography>
                                        </Box>
                                        <Typography sx={{ ...doubleLineSort }} variant={'body1'} color="text.secondary">
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </Stack>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}

export default Infrastructure