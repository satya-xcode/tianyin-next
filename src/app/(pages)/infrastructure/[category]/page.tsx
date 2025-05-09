/* eslint-disable @next/next/no-img-element */
'use client'
import BackSection from '@/components/shared/BackSection';
import useDeviceType from '@/hooks/ui/useDeviceType';
import {
    Box,
    Typography,
    Container,
    Stack,
    Grid,
    Divider,
    Chip,
    useTheme,
} from '@mui/material';
import { useParams } from 'next/navigation';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

// Sample data for infrastructure details
const infrastructureDetails = [
    {
        title: "SMT And MI",
        description: "Our Surface Mount Technology (SMT) and Manual Insertion (MI) lines are equipped with the latest technology to ensure precision and efficiency in manufacturing.",
        images: [
            { original: "/infra/images/smt1.webp", thumbnail: "/infra/images/smt1.webp" },
            { original: "/infra/images/smt11.webp", thumbnail: "/infra/images/smt11.webp" },
            { original: "/infra/images/smt33.webp", thumbnail: "/infra/images/smt33.webp" },
            { original: "/infra/images/smt44.webp", thumbnail: "/infra/images/smt44.webp" },
            { original: "/infra/images/smt55.webp", thumbnail: "/infra/images/smt55.webp" },
            { original: "/infra/new/smt00.webp", thumbnail: "/infra/new/smt00.webp" }
        ],
        features: [
            "High-speed pick-and-place machines",
            "Automated optical inspection (AOI)",
            "Precision soldering technology",
            "Strict quality control processes",
        ],
        link: 'smt-and-mi'
    },
    {
        title: "DC Cables Production",
        description: "Our DC cables production facility is designed to produce high-quality cables with advanced machinery and strict quality control measures.",
        images: [
            { original: "/infra/images/dc1.webp", thumbnail: "/infra/images/dc1.webp" },
            { original: "/infra/images/dc2.webp", thumbnail: "/infra/images/dc2.webp" },
            { original: "/infra/new/dc2.webp", thumbnail: "/infra/new/dc2.webp" },
            { original: "/infra/new/dc1.webp", thumbnail: "/infra/new/dc1.webp" },
            { original: "/infra/new/dec3.webp", thumbnail: "/infra/new/dec3.webp" },
        ],
        features: [
            "High-speed extrusion lines",
            "Automated cutting and stripping machines",
            "Rigorous testing for durability and performance",
            "Customizable cable specifications",
        ],
        link: 'dc-cables-production',
    },
    {
        title: "Assembly And Packing",
        description: "Our assembly and packing lines are optimized for efficiency and reliability, ensuring that products are assembled and packaged to the highest standards.",
        images: [
            { original: "/infra/new/pk1.webp", thumbnail: "/infra/new/pk1.webp" },
            { original: "/infra/images/a1.webp", thumbnail: "/infra/images/a1.webp" },
            { original: "/infra/images/a2.webp", thumbnail: "/infra/images/a2.webp" },
            { original: "/infra/images/ap3.webp", thumbnail: "/infra/images/ap3.webp" },
            { original: "/infra/images/ap5.webp", thumbnail: "/infra/images/ap5.webp" },
        ],
        features: [
            "Automated assembly lines",
            "Custom packaging solutions",
            "Efficient workflow management",
            "Quality assurance at every stage",
        ],
        link: 'assembly-and-packing',
    },
    {
        title: "Injection Moulding",
        description: "Our state-of-the-art molding technology ensures the production of durable and precise components for a wide range of applications.",
        images: [
            { original: "/infra/new/md11.webp", thumbnail: "/infra/new/md11.webp" },
            { original: "/infra/images/mold2.webp", thumbnail: "/infra/images/mold2.webp" },
            { original: "/infra/images/mold3.webp", thumbnail: "/infra/images/mold3.webp" },
        ],
        features: [
            "High-precision injection molding machines",
            "Custom mold designs",
            "Durable and high-quality materials",
            "Efficient production cycles",
        ],
        link: 'injection-moulding',
    },
];

 function InfrastructureDetails() {
       const { category } = useParams()
    const theme = useTheme();
    // const location = useLocation();
    const { isMobile, isTablet, isDesktop, isLargeDesktop } =  useDeviceType()

    // const queryParams = new URLSearchParams(location.search);
    // const category = queryParams.get('category');


    // Find the selected infrastructure category
    const infrastructure = infrastructureDetails.find((item) => item?.link === category);

    if (!infrastructure) {
        return (
            <Container>
                <Typography variant={'body1'} align="center" color="error">
                    Infrastructure category not found!
                </Typography>
            </Container>
        );
    }

    return (
        <Stack spacing={4} p={4}>
          
                <BackSection
                    title={infrastructure.title}
                    description={infrastructure.description}
                />
           
            {/* Image Gallery */}
            {/* // Image Gallery */}
            <Box sx={{}}>
                <ImageGallery
                    items={infrastructure.images}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showThumbnails={true}
                    lazyLoad={true}
                    renderItem={(item) => (
                        <div>
                            <img
                                src={item.original}
                                alt={item.originalAlt}
                                style={{
                                    width: isMobile ? '100%' : isTablet ? '400px' : isDesktop ? '500px' : isLargeDesktop ? '600px' : '700px',
                                    height: isMobile ? '150px' : isTablet ? '300px' : isDesktop ? '400px' : isLargeDesktop ? '300px' : '500px',
                                    objectFit: 'fill',
                                }}
                            />
                        </div>
                    )}
                    renderThumbInner={(item) => (
                        <img
                            src={item.thumbnail}
                            alt={item.thumbnailAlt}
                            style={{
                                width: '80px',
                                height: '60px',
                                objectFit: 'cover',
                                borderRadius: '4px',
                            }}
                        />
                    )}
                />
            </Box>

            {/* Details Section */}
            <Grid container spacing={theme.spacing(4)}>
                <Grid  size={{xs:12,md:6}}>
                    <Stack gap={theme.spacing(4)}>
                        <Stack>
                            <Typography variant={'h2'} fontWeight="bold" gutterBottom>
                                Overview
                            </Typography>
                         
                        </Stack>
                        <Typography variant={'body1'} color="text.secondary">
                            {infrastructure.description}
                        </Typography>
                    </Stack>

                </Grid>
                <Grid  size={{xs:12,md:6}}>
                    <Stack gap={theme.spacing(4)}>
                        <Stack>
                            <Typography variant={'h2'} fontWeight="bold" gutterBottom>
                                Key Features
                            </Typography>
                           
                        </Stack>
                        <Stack spacing={theme.spacing(2)}>
                            {infrastructure.features.map((feature, index) => (
                                <Chip key={index} label={feature} variant="outlined" />
                            ))}
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>

            {/* Divider */}
            <Divider sx={{ my: theme.spacing(4) }} />

            {/* Additional Information */}
            <Typography variant={'h2'} fontWeight="bold" gutterBottom>
                Why Choose Us?
            </Typography>
            <Typography variant={'body1'} color="text.secondary">
                Our infrastructure is designed to deliver high-quality products with unmatched precision and efficiency. We leverage the latest technology and industry best practices to ensure that every component meets the highest standards of quality and reliability.
            </Typography>
        </Stack>
    );
}

export default InfrastructureDetails;