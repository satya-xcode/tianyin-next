'use client'
import { Grid, Card, CardMedia, CardContent, Typography, Box, Button, Dialog, CardActionArea, Stack, useTheme, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import useDeviceType from '@/hooks/ui/useDeviceType';
import { cardImageZoomStyles } from '@/components/animations/css/export/cardImageZoomStyles';
import { singleLineSort } from '@/components/animations/css/export/textSortStyles';
import LightBox from './LightBox';
const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

// Utility function to map photos
const mapPhotos = (photos: any) => photos.map(({ asset, alt, width, height }: { asset: string, alt: string, width: number, height: number }) => ({
    src: asset,
    alt,
    width,
    height,
    srcSet: breakpoints.map((breakpoint) => ({
        src: asset,
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
    })),
}));

const diwaliphotos2024 = mapPhotos([
    { asset: '/diwali/d1.webp', width: 1080, height: 780, alt: "Hiking boots" },
    { asset: '/diwali/d2.webp', width: 1080, height: 780, alt: "Purple petaled flowers near a mountain" },
    { asset: '/diwali/d3.webp', width: 1080, height: 720, alt: "A person pointing at a beige map" },
    { asset: '/diwali/d4.webp', width: 1080, height: 900, alt: "A person pointing at a beige map" },
    { asset: '/diwali/d5.webp', width: 1080, height: 900, alt: "A person pointing at a beige map" }
]);

// const diwaliphotos2025 = mapPhotos([
//     // { asset: '/diwali/d1.webp', width: 1080, height: 780, alt: "Hiking boots" },
//     // { asset: '/diwali/d2.webp', width: 1080, height: 780, alt: "Purple petaled flowers near a mountain" },
//     // { asset: '/diwali/d3.webp', width: 1080, height: 720, alt: "A person pointing at a beige map" },
//     // { asset: '/diwali/d4.webp', width: 1080, height: 900, alt: "A person pointing at a beige map" },
//     // { asset: '/diwali/d5.webp', width: 1080, height: 900, alt: "A person pointing at a beige map" }
// ]);

const womensphoto2024 = mapPhotos([
    { asset: '/womens/2024/w1.webp', width: 1080, height: 780, alt: "Hiking boots" },
    { asset: '/womens/2024/w2.webp', width: 1080, height: 780, alt: "Purple petaled flowers near a mountain" },
    { asset: '/womens/2024/w3.webp', width: 1080, height: 720, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w4.webp', width: 1080, height: 900, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w5.webp', width: 1080, height: 900, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w6.webp', width: 1080, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w7.webp', width: 1080, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w8.webp', width: 1080, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w9.webp', width: 1080, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w10.webp', width: 1080, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w11.webp', width: 1080, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w12.webp', width: 1080, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w13.webp', width: 1080, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2024/w14.webp', width: 1080, height: 1500, alt: "A person pointing at a beige map" }
]);

const womensphoto2025 = mapPhotos([
    // { asset: '/womens/2025/group (1).webp', width: 1500, height: 1900, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (2).webp', width: 1500, height: 1900, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (3).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (4).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (5).webp', width: 1200, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (6).webp', width: 1200, height: 1500, alt: "A person pointing at a beige map" },
    { asset: '/womens/2025/group (7).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    { asset: '/womens/2025/group (8).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (9).webp', width: 1500, height: 1900, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (10).webp', width: 1500, height: 1900, alt: "A person pointing at a beige map" },
    { asset: '/womens/2025/group (11).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (12).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (13).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (14).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (15).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (16).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (17).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (18).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (19).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (20).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    { asset: '/womens/2025/group (21).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (22).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (23).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (24).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (25).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (26).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (27).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (28).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
    // { asset: '/womens/2025/group (29).webp', width: 1800, height: 1500, alt: "A person pointing at a beige map" },
]);

const achievementparty2024 = mapPhotos([
    { asset: '/dinner/p1.webp', width: 1680, height: 1350, alt: "Hiking boots" },
    // { asset: '/dinner/p2.webp', width: 1680, height: 1400, alt: "Purple petaled flowers near a mountain" },
    { asset: '/dinner/p3.webp', width: 1680, height: 1300, alt: "A person pointing at a beige map" },
    { asset: '/dinner/p4.webp', width: 1680, height: 1300, alt: "A person pointing at a beige map" },
    { asset: '/dinner/p6.webp', width: 1680, height: 1100, alt: "A person pointing at a beige map" },
    { asset: '/dinner/p7.webp', width: 1680, height: 1300, alt: "A person pointing at a beige map" },
    { asset: '/dinner/p8.webp', width: 1680, height: 1200, alt: "A person pointing at a beige map" }
]);

const rishikeshTrip2024 = mapPhotos(
    [
        // { asset: '/trip/rishikesh/trip (1).webp', width: 1600, height: 1100, alt: "Team rafting in Rishikesh" },
        // { asset: '/trip/rishikesh/trip (2).webp', width: 1600, height: 1100, alt: "Team trekking in Rishikesh" },
        { asset: '/trip/rishikesh/trip (3).webp', width: 1600, height: 1100, alt: "Team bonding in Rishikesh" },
        { asset: '/trip/rishikesh/trip (4).webp', width: 1600, height: 1100, alt: "Team bonding in Rishikesh" },
        { asset: '/trip/rishikesh/trip (5).webp', width: 1600, height: 1100, alt: "Team bonding in Rishikesh" },
        { asset: '/trip/rishikesh/trip (6).webp', width: 1600, height: 1100, alt: "Team bonding in Rishikesh" },
    ]
)

// Album data
const albums = [
    {
        id: 1,
        title: "Empowering Women: Celebrating International Women's Day",
        description: "Celebrating women's contributions and impact in our organization.",
        images: '/womens/2025/group (4).webp',
        category: "Womens Day",
        albums: [
            {
                id: 1,
                year: "2024",
                title: "Breaking Barriers: Women in Leadership",
                description: "Mentorship program for women in leadership.",
                images: '/womens/2024/w2.webp',
                category: "Womens Day",
                date: "March 8, 2024",
            },
            {
                id: 1,
                year: "2025",
                title: "Empowering Women in STEM",
                description: "Workshops and training for women in STEM.",
                images: '/womens/2025/group (4).webp',
                category: "Womens Day",
                date: "March 8, 2025",
            }
        ]
    },
    {
        id: 2,
        title: "Celebrating Diwali: Spreading Light and Joy",
        description: "Our team's Diwali celebration with rangoli, diyas, and sweets.",
        images: '/diwali/d1.webp',
        category: "Diwali Celebration",
        albums: [
            {
                id: 1,
                year: "2024",
                title: "Diwali Celebration 2024",
                description: "Our team celebrated Diwali with rangoli, diyas, and sweets.",
                images: '/diwali/d1.webp',
                category: "Diwali Celebration",
                date: "November 12, 2024",
            }
        ]
    },
    {
        id: 3,
        title: "Achievement's Party",
        description: "A party to celebrate our team's achievements and recognize hard work and dedication.",
        images: '/dinner/p1.webp',
        category: "Social Event",
        albums: [
            {
                id: 1,
                year: "2024",
                title: "Achievement's Party 2024",
                description: "A party to celebrate our team's achievements in 2024.",
                images: '/dinner/p1.webp',
                category: "Social Event",
                date: "March 17, 2024",
            },
        ],
    },
    {
        id: 4,
        title: "Office Trip to Rishikesh",
        description: "Our team's exciting trip to Rishikesh, filled with adventure and bonding.",
        images: '/trip/rishikesh/trip (1).webp',
        category: "Office Trip",
        albums: [
            {
                id: 1,
                year: "2024",
                title: "Rishikesh Adventure",
                description: "Our team's thrilling experiences in Rishikesh, from rafting to trekking.",
                images: '/trip/rishikesh/trip (2).webp',
                category: "Office Trip",
                date: "February 20, 2024",
            },
        ],
    }
];

const imageMap: any = {
    "Breaking Barriers: Women in Leadership": womensphoto2024,
    "Empowering Women in STEM": womensphoto2025,
    "Diwali Celebration 2024": diwaliphotos2024,
    "Achievement's Party 2024": achievementparty2024,
    "Rishikesh Adventure": rishikeshTrip2024
};

// Main component
export default function AlbumStrip() {
    const { spacing } = useTheme()
    const { isMobile } = useDeviceType()
    const [selectedAlbum, setSelectedAlbum] = useState<any>(null);
    const [selectedAlbumDrawer, setSelectedAlbumDrawer] = useState<any>(null);
    const handleOpen = (album: any) => setSelectedAlbum(album);
    const handleOpenDrawer = (album: any) => setSelectedAlbumDrawer(album);
    const handleClose = () => setSelectedAlbum(null);
    const handleCloseDrawer = () => setSelectedAlbumDrawer(null);

    return (
        <Stack gap={spacing(4)}>
            <Stack>
                <Typography data-aos="fade-right" variant={'body1'} fontWeight="bold">Latest Blog Posts</Typography>
            </Stack>
            <Grid container spacing={spacing(4)}>
                {albums?.map((post, index) => (
                    <Grid size={{ xs: 12, md: 3 }} key={index} data-aos="fade-up">
                        <Card sx={{ display: "flex", flexDirection: "column" }}>
                            {/* <CardActionArea sx={{ height: isMobile ? "auto" : 550 }} onClick={() => handleOpen(post)}> */}
                            <CardActionArea sx={{ height: isMobile ? "auto" : 480 }} onClick={() => handleOpenDrawer(post)}>
                                <CardMedia
                                    component="img"
                                    image={post?.images}
                                    alt={post?.title}
                                    sx={{ height: 250, objectFit: "cover", ...cardImageZoomStyles }}
                                />
                                <CardContent sx={{ flex: 1, height: '100%', gap: spacing(1), display: 'flex', flexDirection: "column" }}>
                                    {/* <Typography variant="overline" color="primary">
                                        {post?.category} • {post?.date}
                                    </Typography> */}
                                    <Typography variant={'h3'} fontWeight="bold">
                                        {post?.title}
                                    </Typography>
                                    <Typography variant={'body1'} color="textSecondary">
                                        {post?.description}
                                    </Typography>
                                    <Box sx={{ textAlign: "right" }}>
                                        <Button variant="outlined" color="info">
                                            Read More
                                        </Button>
                                    </Box>

                                </CardContent>

                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}

            </Grid>

            <>

                <Drawer
                    anchor='top'
                    open={!!selectedAlbumDrawer}
                    onClose={handleCloseDrawer}
                    PaperProps={{
                        elevation: 0,
                        variant: 'elevation',
                        component: 'div',
                        sx: {
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            backdropFilter: 'blur(8px)',
                            backgroundImage: 'none'
                        }
                    }}
                >
                    <Stack p={4} spacing={4}>
                        <Stack direction={'row'} gap={spacing(2)} alignItems={'center'} justifyContent={'start'}>
                            <Button
                                size='small'
                                color="error" onClick={handleCloseDrawer}
                                // startIcon={<CloseIcon />}
                                variant='outlined'
                            >Close
                            </Button>
                            <Stack>
                                <Typography fontWeight={'bold'} sx={{ ...singleLineSort }} variant={'body1'}>{selectedAlbumDrawer?.title}</Typography>
                                <Typography variant={'subtitle2'} sx={{ ...singleLineSort }}>{selectedAlbumDrawer?.description}</Typography>
                            </Stack>
                        </Stack>
                        <Grid container spacing={spacing(4)}>
                            {
                                selectedAlbumDrawer?.albums?.map((post: any, index: string) => {
                                    return (
                                        <Grid size={{ xs: 12, md: 3 }} key={index} data-aos="fade-up">
                                            <Card sx={{ display: "flex", flexDirection: "column" }}>
                                                <CardActionArea sx={{ height: isMobile ? "auto" : 550 }} onClick={() => handleOpen(post)}>
                                                    <CardMedia
                                                        component="img"
                                                        image={post?.images}
                                                        alt={post?.title}
                                                        sx={{ height: 250, objectFit: "cover", ...cardImageZoomStyles }}
                                                    />
                                                    <CardContent sx={{ flex: 1, height: '100%', gap: spacing(1), display: 'flex', flexDirection: "column" }}>
                                                        <Typography fontWeight="bold" variant={'h3'} color="info">
                                                            {post?.category} • {post?.date}
                                                        </Typography>
                                                        <Typography variant={'body1'} >
                                                            {post?.title}
                                                        </Typography>
                                                        <Typography variant={'body1'} color="textSecondary">
                                                            {post?.description}
                                                        </Typography>
                                                        <Box sx={{ textAlign: "right" }}>
                                                            <Button variant="outlined" color="info">
                                                                Read More
                                                            </Button>
                                                        </Box>

                                                    </CardContent>

                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                        {selectedAlbum && (
                            <ImagesDialog open={!!selectedAlbum} handleClose={handleClose} des={selectedAlbum?.description} title={selectedAlbum?.title} photos={imageMap[selectedAlbum?.title]} date={selectedAlbum?.date} />
                        )}
                    </Stack>
                </Drawer>

            </>

        </Stack>

    );
}


// Dialog component
function ImagesDialog({ open, handleClose, des, photos, title, date }: { open: boolean, handleClose: any, des: any, photos?: any, title: string, date: string }) {
    const { spacing } = useTheme()

    return (
        <Dialog fullScreen PaperComponent={Stack} open={open} onClose={handleClose}
            sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                backdropFilter: 'blur(5px)',
                '& .MuiDrawer-paper': {
                    backgroundImage: 'none',
                    boxShadow: 'none',
                    border: 'none',
                    borderRadius: 0,
                    padding: 0,
                    margin: 0,
                }
            }}
        >
            <Stack p={4} spacing={4}>
                <Stack direction={'row'} flex={1} gap={spacing(2)} alignItems={'center'} justifyContent={'start'}>
                    <Button
                        size='small'
                        color="error" onClick={handleClose}
                        // startIcon={<CloseIcon />}
                        variant='outlined'
                    >Close
                    </Button>

                    <Stack flex={1}>
                        <Typography sx={{ ...singleLineSort }} variant={'body1'} component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ ...singleLineSort }} variant={'subtitle2'} component="div">
                            {des}
                        </Typography>
                    </Stack>
                    <Typography sx={{ ...singleLineSort }} variant={'body1'} component="div">
                        {date}
                    </Typography>
                </Stack>
                <LightBox photos={photos} />
            </Stack>
        </Dialog>
    );
}