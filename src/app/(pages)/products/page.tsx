/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import { Typography, Stack, useTheme, CardMedia, Grid, Card, CardContent, Container, Tabs, Tab, Box, Button, Chip, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { ProductsData } from '@/data/ProductsData';
import useDeviceType from '@/hooks/ui/useDeviceType';
import HeroSection from '@/components/shared/HeroSection';
// import { useLoaderData } from 'react-router-dom';
const Products = () => {
    const theme = useTheme();

    const [openContactDialog, setOpenContactDialog] = useState(false); // State to manage the contact dialog
    const [selectedProduct, setSelectedProduct] = useState<any>(null); // State to store the selected product
    const handleContactClick = (product: any) => {
        setSelectedProduct(product);
        setOpenContactDialog(true);
    };
    const handleCloseContactDialog = () => {
        setOpenContactDialog(false);
        setSelectedProduct(null);
    };
    const { isMobile } = useDeviceType();

    const [activeTab, setActiveTab] = useState('all'); // State to manage the active tab

    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setActiveTab(newValue);
    };

    // Filter products based on the active tab
    const filteredProducts = ProductsData.filter((product) => {
        if (activeTab === 'all') return true;
        return product.category === activeTab;
    });

    return (
        <>
            {/* <h1>{data.message}</h1> */}
            {/* Hero Section */}
            <HeroSection
                title="Powering Your World"
                description=" Discover our premium range of chargers and adapters designed for efficiency, durability, and style."
                backgroundImage={'/image/banners/power.jpg'}
                onCtaClick={() => console.log("CTA clicked!")}
                showBreadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products", href: "/products" },
                ]}
                showBackButton
            />



            <Stack gap={theme.spacing(8)} p={4}>
                {/* Key Highlights Section */}
                <Stack>
                    <Grid container spacing={4}>
                        <Grid  size={{xs:12,md:4}}>
                            <Stack alignItems="center" textAlign="center">
                                <Typography variant={'h2'} fontWeight="bold" color="primary">
                                    100+
                                </Typography>
                                <Typography variant={'h3'} fontWeight="bold">
                                    Products Available
                                </Typography>
                                <Typography variant={'body1'} color="text.secondary">
                                    A wide range of chargers and adapters to meet all your needs.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid  size={{xs:12,md:4}}>
                            <Stack alignItems="center" textAlign="center">
                                <Typography variant={'h2'} fontWeight="bold" color="primary">
                                    5M+
                                </Typography>
                                <Typography variant={'h3'} fontWeight="bold">
                                    Happy Customers
                                </Typography>
                                <Typography variant={'body1'} color="text.secondary">
                                    Trusted by millions worldwide for quality and reliability.
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid  size={{xs:12,md:4}}>
                            <Stack alignItems="center" textAlign="center">
                                <Typography variant={'h2'} fontWeight="bold" color="primary">
                                    10+
                                </Typography>
                                <Typography variant={'h3'} fontWeight="bold">
                                    Years of Experience
                                </Typography>
                                <Typography variant={'body1'} color="text.secondary">
                                    Delivering innovative solutions since 2013.
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>


                <Stack gap={theme.spacing(4)}>

                    <Stack>
                        <Typography fontWeight={'bold'} variant={'h2'}>Our Products</Typography>
                        <Typography variant={'body1'}>High-quality chargers and adapters for various applications with precision engineering.</Typography>
                    </Stack>


                    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                        <Tabs value={activeTab} onChange={handleTabChange} aria-label="product categories">
                            <Tab label="All Products" sx={{ fontWeight: 'bold' }} value="all" />
                            <Tab label="Chargers" sx={{ fontWeight: 'bold' }} value="Charger" />
                            <Tab label="Adapters" sx={{ fontWeight: 'bold' }} value="Adapter" />
                        </Tabs>
                    </Box>

                    {/* Product Grid */}
                    <Grid container spacing={theme.spacing(4)}>
                        {filteredProducts.map((card, index) => (
                            <Grid  size={{xs:12,sm:6,md:4,lg:6,xl:4}} key={index}>
                                <Card variant='elevation' sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', height: '100%' }}>
                                    {/* Product Image */}
                                    <CardMedia
                                        component="img"
                                        image={card?.images}
                                        alt={card?.title}
                                        sx={{
                                            width: isMobile ? '100%' : 300,
                                            height: 'auto',
                                            objectFit: 'cover',
                                            transition: 'transform 0.5s',
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    />
                                    {/* Product Details */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant={'h3'} fontWeight="bold">
                                                {card?.title}
                                            </Typography>
                                            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                                                <Chip label={card?.category} color="primary" size="small" />
                                                <Chip label={`${card?.specifications?.powerOutput}`} color="secondary" size="small" />
                                            </Stack>
                                            <Typography align='left' variant={'body1'} color="textSecondary" component="p">
                                                Connector Type: {card?.specifications?.connectorType}
                                            </Typography>
                                            <Typography align='left' variant={'body1'} color="textSecondary" component="p">
                                                Charging Speed: {card?.specifications?.powerOutput}
                                            </Typography>
                                            <Typography align='left' variant={'body1'} color="textSecondary" component="p">
                                                Output: {card?.specifications?.output}
                                            </Typography>
                                        </CardContent>
                                        {/* Contact Button */}
                                        <Box sx={{ p: 2, textAlign: 'center' }}>
                                            <Button
                                                variant="contained"
                                                // color="primary"
                                                sx={{ bgcolor: "rgba(255, 255, 255, 0.09)" }}
                                                fullWidth
                                                onClick={() => handleContactClick(card)}
                                            >
                                                Contact Us
                                            </Button>
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>




                    {/* Contact Dialog */}
                    <Dialog open={openContactDialog} onClose={handleCloseContactDialog}>
                        <DialogTitle>Contact Us About {selectedProduct?.title}</DialogTitle>
                        <DialogContent>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                For more information about this product, please reach out to us:
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                📞 <strong>Phone:</strong> +91 1204109448
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                📧 <strong>Email:</strong> tianyinindia@gmail.com
                            </Typography>
                            <Typography variant="body1">
                                🌐 <strong>Website:</strong> https://www.tianyin.in
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseContactDialog} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>


                    {/* Why Choose Us Section */}
                    <Container maxWidth={false}>
                        <Stack gap={theme.spacing(4)}>
                            <Stack>
                                <Typography variant={'h2'} fontWeight="bold" gutterBottom>
                                    Why Choose Us?
                                </Typography>
                           
                            </Stack>
                            <Grid container spacing={theme.spacing(4)}>
                                <Grid  size={{xs:12,md:6}}>
                                    <Typography align='left' variant={'h3'} fontWeight="bold" gutterBottom>
                                        Unmatched Quality
                                    </Typography>
                                    <Typography align='left' variant={'body1'} color="text.secondary">
                                        Our products are crafted with precision engineering and undergo rigorous quality checks to ensure durability and performance.
                                    </Typography>
                                </Grid>
                                <Grid  size={{xs:12,md:6}}>
                                    <Typography align='left' variant={'h3'} fontWeight="bold" gutterBottom>
                                        Innovative Technology
                                    </Typography>
                                    <Typography align='left' variant={'body1'} color="text.secondary">
                                        We integrate the latest advancements in charging and adapter technology to meet the evolving needs of modern devices.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Container>
                </Stack>
            </Stack>


        </>
    );
};

export default Products;