'use client'
import { Card, CardContent, CardMedia, Grid, Stack, Typography, useTheme } from '@mui/material';
import { cardImageZoomStyles } from '../../../../components/animations/css/export/cardImageZoomStyles';
import useDeviceType from '../../../../hooks/ui/useDeviceType';
const SliderPhotosData = [
    {
        asset: '/meeting/mm1.webp',
        width: 1080,
        height: 1620,
        alt: "Purple petaled flowers near a mountain",
        title: "Our Managing Director at Industry conference organised by ICEA",
        desc: "10 Mar 2024"
    },
    {
        asset: '/meeting/mt5.webp',
        width: 1080,
        height: 1620,
        alt: "Purple petaled flowers near a mountain",
        title: "Our managing director as keynote speaker at IT Hardware confrence 2024 organised by Government of India and ICEA",
        desc: "15 Sep 2024"
    },
    {
        asset: '/meeting/meeting1.webp',
        width: 1080,
        height: 720,
        alt: "A person pointing at a beige map",
        title: "Had a very productive meeting with Hon'ble Minister of State for Communications Sh. Devusinh Chauhan sir regarding telecom products ",
        desc: "6 June 2022"
    }
]
export default function MeetingSection() {
    const { spacing } = useTheme()

    return (
        <Stack gap={spacing(2)}>

            <Typography data-aos="fade-right" variant={'h2'} fontWeight="bold">Meetings and Events</Typography>
            <Typography align='left' data-aos="fade-right" variant={'body1'} color="textSecondary">Stay up-to-date with our latest meetings and events, including industry conferences, keynote speeches, and meetings with key stakeholders.</Typography>

            <Grid container spacing={spacing(4)}>
                {SliderPhotosData.map((item, index) => (
                    <Grid data-aos="fade-up" key={index} size={{ xs: 12, sm: 6, md: 4 }}>
                        <AchievementsCard
                            image={item.asset}
                            title={item.title}
                            description={item.desc}
                        />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AchievementsCard = ({ image, title, description }: { image: any, title: any, description: any, onClick?: any }) => {
    const { isMobile } = useDeviceType()
    return (
        <Card variant="outlined" sx={{
            flex: 1
        }}>
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                    objectFit: 'fill',
                    height: isMobile ? 300 : 400,
                    ...cardImageZoomStyles
                }}
            />
            <CardContent sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                // padding: "16px",
                backgroundColor: 'rgba(0, 0, 0, 0.2)', // Add a black background with 50% opacity
                backdropFilter: 'blur(2px)', // Add a blur effect to the background
                color: 'white', // Set the text color to white
            }}>
                <Typography variant={'body1'} textTransform="capitalize" gutterBottom>
                    {title}
                </Typography>
                {description && (
                    <Typography variant={'body1'} >
                        {description}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}
