/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'

import { Stack, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, DialogActions, Button, Dialog, DialogTitle, DialogContent, Slide, Grow, useTheme } from '@mui/material';

const fg1 = '/products/telecom/5g1.png'
const fg2 = '/products/telecom/5g2.png'
const fg3 = '/products/telecom/5g3.png'
const fg4 = '/products/telecom/5g4.png'
const fg5 = '/products/telecom/5g5.png'
const fg6 = '/products/telecom/5g6.png'
const fg7 = '/products/telecom/5g7.png'
const fg8 = '/products/telecom/5g8.png'
const fg12 = '/products/telecom/5g12.png'
const fg9 = '/products/telecom/5g9.png'
const fg10 = '/products/telecom/5g10.png'
const fg11 = '/products/telecom/5g11.png'
const fg13 = '/products/telecom/5g13.png'
import HeroSection from '@/components/shared/HeroSection';
import useDeviceType from '@/hooks/ui/useDeviceType';

const products = [
    {
        "name": "5G CPE",
        "image": fg1,
        "description": "Tianyin's 5G CPE is a highly integrated access gateway equipment, mainly for users in remote branches of enterprises, cluster shops, and remote rural areas with 5G coverage conditions. The product can cover most of the broadband application scenarios, providing stable high-definition voice services and high-speed reliable data transmission services. Moreover, the product is equipped with dual-band Wi-Fi, full gigabit network port, and high-gain antenna, which is flexible to use and quick to deploy, and can easily adapt to the network requirements of multiple scenarios.",
        "specs": {
            "mode": "5G/LTE CAT20+/4G/3G",
            "wifi": "Wi-Fi 6, 4T4R, DBDC",
            "port": "4*GE, 1*RJ11",
            "Wi-Fi 6": true,
            "Multimode": true,
            "Mesh": true,
            "Voice": true,
            "SA/NSA": true,
        }
    },
    {
        "name": "AI Hub(5G+8K+Wi-Fi 6)",
        "image": fg2,
        "description": "The AI Hub combines 5G high-speed network access, Wi-Fi 6 Gigabit LAN coverage, 8K ultra-high-definition decoding, and AI intelligent multi-scenario application. The product adopts the world's leading chip solution, relying on the perfect combination of 5G + Wi-Fi 6, to achieve the industry's highest standard network access and coverage capability, with gigabit-level network bandwidth and ultra-low delay characteristics, it provides perfect network solutions for different applications, including ultra-high-definition live broadcast, VR\AR, games, etc. At the same time, the addition of the MU-MIMO function solves the industry's problem of poor multi-user concurrent access network experience. The product has built-in 8K AI chips of the highest specification in the world, can provide 8K@120FPS video decoding capabilities, support HDR high dynamics and HiFi sound effects, meet the needs of high frame rate scenes such as sports, games, VR, and provides users with a smoother picture quality experience, brings cinema-level ultimate entertainment and audio-visual enjoyment. In addition, the product integrates 4TOPS NPU units, locates intelligent edge computing nodes, and empowers AI to provide sufficient computing power for different levels of AI applications such as image and sound enhancement, target recognition, intent prediction, and reasoning, and easily build the hub of future home edge computing and smart home control. This product integrates the network center, entertainment center, data center, control center, and computing power center. It can be widely used in different scenarios such as homes, bars, clubs, training institutions etc., with flexible deployment、convenient use and powerful functions. From data collection, AI mining to value realization, the gateway can provide a powerful cornerstone of capabilities to empower families and various industry scenarios, helps operators upgrade their businesses, and let users truly experience the beauty of technology, and share a new digital life of networking, informatization, and intelligence.",
        "specs": {
            "DDR/Flash Memory": "3GB | 6GB 16GB",
            "5G module": "SA/NSA, 5G/4G",
            "Ports": {
                "HDMI": "1*HDMI 2.1",
                "GE": "1*GE",
                "USB": "2*USB 3.0"
            },
            "Wireless configuration": "Wi-Fi 6, BT4.2",
            "Android": true,
            "NPU for AI": true,
            "5G gateway": true,
            "8K@120FPS AVS3\\H.265\\VP9\\AV1": true
        }
    },
    {
        "name": "5G Industrial Gateway",
        "image": fg3,
        "description": "Changhong 5G Industrial Gateway is a highly integrated wireless router that provides users with wireless, long-range big data transmission services through public 3G/4G/5G networks. Boasting a high-performance industrial-grade 64-bit communication processor, as well as a RS232 (or RS485/RS422) interface, four LAN interfaces, a WAN interface, and a Wi-Fi interface, the product can be simultaneously connected to a serial device, an Ethernet device, and a Wi-Fi device for transparent data transmission and routing. The industrial gateway is widely used in smart factories, logistics vehicles, video surveillance equipment, and other applications, etc.",
        "specs": {
            "Network Support": "5G/LTE CAT20/4G/3G/2G",
            "Wireless Configuration": "Wi-Fi 6 4T4R DBDC",
            "Internet Access": "1(GE) WAN + 4(GE) LAN",
            "RS232/485": "*1",
            "Applications": [
                "Smart factories",
                "logistics vehicles",
                "video surveillance"
            ],
            "Wi-Fi 6,4T4R": true,
            "SA/NSA": true,
            "Multiple Protocols": true,
            "Continuous power": true,
            "High Performance": true,
            "24/7": true
        }
    },
    {
        "name": "GPON (Wi-Fi 5)",
        "image": fg4,
        "description": "The GPON ONT (Smart Gateway), which meets specifications of all telecom operators, is suitable for high-speed FTTH data transmission.",
        "specs": {
            "Memory": "512MB",
            "Flash": "256MB",
            "Interfaces": {
                "Ethernet": "4*GE",
                "Phone": "1*RJ11",
                "USB": "1*USB2.0"
            },
            "Wireless Configuration": "IEEE 802.11b/g/n/ac 2T2R DBDC",
            "Features": [
                "DHCP",
                "QoS",
                "IGMP",
                "VLAN",
                "Firewall",
                "TR069",
                "OSGI"
            ]
        }
    },
    {
        "name": "GPON Hybrid Gateway (GPON+STB)",
        "image": fg5,
        "description": "The hybrid gateway, equipped with multiple terminals including a wireless router, a voice encoder, and a set-top box, provides wired and wireless access as well as various video output interfaces. It is designed to meet the diverse needs of hotels or enterprises for broadband and audiovisual services.",
        "specs": {
            "PON FLASH + DDR": "256MB + 256MB",
            "STB FLASH + DDR": "8GB + 1GB",
            "Interfaces": {
                "Ethernet": "1*GE",
                "Fast Ethernet": "1*FE",
                "Phone": "1*RJ11",
                "Audio/Video": "1*mini AV",
                "HDMI": "1*HDMI",
                "USB": "2*USB2.0"
            },
            "Wireless Configuration": "IEEE 802.11b/g/n, 2T2R, 300Mbps",
            "Features": [
                "GPON+STB",
                "VLAN",
                "Firewall",
                "TR069",
                "OSGI"
            ]
        }
    },
    {
        "name": "XG-PON(Wi-Fi 6)",
        "image": fg6,
        "description": "The XG-PON ONT, designed for home and small business users, is suitable for high-speed FTTH data transmission.",
        "specs": {
            "Memory": "512MB",
            "Flash": "256MB",
            "Interfaces": {
                "Ethernet": "4*GE",
                "Phone": "1*RJ11",
                "USB": [
                    "1*USB2.0",
                    "1*USB3.0"
                ]
            },
            "Wireless Configuration": "IEEE 802.11b/g/n/ac/ax 2T2R DBDC",
            "Features": [
                "DHCP",
                "QoS",
                "IGMP",
                "Wi-Fi 6",
                "TR069",
                "OSGI"
            ]
        }
    },
    {
        "name": "GPON (Wi-Fi 6)",
        "image": fg7,
        "description": "The GPON ONT, designed for home and small business users, is suitable for high-speed FTTH data transmission.",
        "specs": {
            "Memory": "512MB",
            "Flash": "256MB",
            "Interfaces": {
                "Ethernet": "4*GE",
                "Phone": "1*RJ11",
                "USB": "1*USB2.0"
            },
            "Wireless Configuration": "IEEE 802.11b/g/n/ac/ax, 2T2R DBDC",
            "Features": [
                "DHCP",
                "QoS",
                "IGMP",
                "VLAN",
                "Firewall",
                "TR069",
                "OSGI"
            ]
        }
    },
    {
        "name": "Wi-Fi 6 router (AX3000)",
        "image": fg12,
        "description": "The Wi-Fi 6 dual-band router supports 6th-generation Wi-Fi protocol, higher speeds, low latency, larger capacity, and higher security. The product covers most of broadband applications and provides high-speed, reliable data transmission services. Moreover, it is equipped with dual-band Wi-Fi, Gigabit Ethernet, and high-gain antennas, making it easy to use and deploy, and suitable for the networking requirements of various applications.",
        "specs": {
            "Flash+Memory": "128MB + 256MB",
            "Wireless Configuration": "IEEE 802.11a/b/g/n/ac/ax, 2T2R, 2.4G & 5GHz DBDC",
            "Port": "1*GE WAN + 3*GE LAN",
            "Features": [
                "SoC",
                "Wi-Fi 6",
                "Mesh"
            ]
        }
    },
    {
        "name": "Wi-Fi 6 AIoT router",
        "image": fg8,
        "description": "The AIoT wireless router supports 6th-generation Wi-Fi technology. Integrated both broadband and narrowband protocols, the product boasts numerous advantages including higher speed, low latency, and larger capacity. The product covers most of broadband applications and provides high-speed, reliable data services. The product also offers dual-band Wi-Fi 6, Gigabit Ethernet, high-gain antennas, and supports Smart Home-related IoT devices. It is easy to use and deploy, and suitable for networking requirements of various applications.",
        "specs": {
            "Flash+Memory": "128MB + 512MB",
            "Wireless Configuration": "Wi-Fi IEEE 802.11a/b/g/n/ac/ax (2T2R 双频), Bluetooth 5.0 (Mesh), ZigBee 3.0",
            "Port": "2*GE",
            "Features": [
                "IoT",
                "Wi-Fi 6",
                "Mesh"
            ],
            "App": true
        }
    },
    {
        "name": "Wi-Fi 6 HUB",
        "image": fg9,
        "description": "The Home Cloud Hub is a router connected to the Internet that also provides data storage. As a dedicated data storage server, it completely separates its storage service from the server - the data is managed centrally, releasing more bandwidth and improving performance. For better system performance and to ensure uninterrupted user access, the Home Cloud Hub uses specialized operating systems for network file access. These operating systems support both standard file access and their corresponding network protocols. It is therefore able to meet specific user requirements, with key features including file management, file classification, file backup, file search and view, routing management, and Mesh.",
        "specs": {
            "Flash+Memory": "128MB + 256MB",
            "Wireless Configuration": "IEEE 802.11a/b/g/n/ac/ax, 2T2R, 2.4G & 5GHz DBDC",
            "Port": "1*GE WAN, 3*GE LAN, 1*USB 3.0",
            "Processor": "双核1Ghz",
            "Wi-Fi": "AX3000",
            "Security": "WPA3",
            "NFC": true,
            "Wireless Charging": "18W"
        }
    },
    {
        "name": "“Nebula” distributed router",
        "image": fg10,
        "description": "The “Nebula” distributed router is a wireless dual-band gigabit router featuring Mesh technology. Intelligent Mesh distributed networking technology supports additional network extension equipment. The product, which boasts equivalence design and no rank order, is a plug-and-play device that is easy to configure. The nodes are self-repairing. In case of connection break, the device will automatically try to establish a new link and ensure a smooth network environment. The product supports MU-MIMO and can communicate with multiple terminals simultaneously, significantly improving network throughput. Integrated 2.4G-5G, unified SSID for multiple devices, intelligent repair, seamless roaming, and automatic channel optimization provide you with a high-speed and stable wireless Wi-Fi experience.",
        "specs": {
            "Wi-Fi": "IEEE 802.11a/b/g/n/ac 2T2R, 2.4G&5GHz DBDC",
            "Port": "2*GE",
            "Features": [
                "Same Design",
                "Port Mixed",
                "Networking",
                "Band Steering",
                "Roaming",
                "Channel"
            ]
        }
    },
    {
        "name": "Gigabit router",
        "image": fg11,
        "description": "The dual-band gigabit wireless router supports IEEE 802.11a/b/g/n/ac. It boasts wireless speeds at 2.4GHz of up to 300Mbps, with speeds at 5GHz as high as 867Mbps, and an overall transmission speed of 1167Mbps. It efficiently supports high-speed network applications such as online games, HD video playback, and video calls. 4 external antennas provide high-gain, higher signal intensity, and wider coverage, so that every corner of your house can be stably connected to the Wi-Fi at high speed.",
        "specs": {
            "Wi-Fi": {
                "description": "IEEE 802.11a/b/g/n/ac 2T2R, 2.4G&5GHz DBDC",
            },
            "Port": {
                "WAN": "1*GE WAN",
                "LAN": "4*GE LAN"
            },
            "Features": [
                "High rate",
                "1000 Mbps port",
                "Dual-band Wi-Fi"
            ]
        }
    },
    {
        "name": "Wi-Fi 6 router (AX1800)",
        "image": fg13,
        "description": "The Wi-Fi 6 dual-band router supports 6th-generation Wi-Fi protocol, 2T2R SDB, as well as higher speeds, low latency, larger capacity, and higher security, guaranteed by a maximum wireless speed of 1.8Gbps. The product covers most of broadband applications and provides high-speed, reliable data transmission services. Moreover, it is equipped with dual-band Wi-Fi, Gigabit Ethernet, and high-gain antennas, making it easy to use and deploy, and suitable for the networking requirements of various applications.",
        "specs": {
            "Flash+Memory": "128MB + 256MB",
            "Wireless Configuration": "IEEE 802.11a/b/g/n/ac/ax, 2T2R, 2.4G & 5GHz DBDC",
            "Port": {
                "WAN": "1*GE WAN",
                "LAN": "3*GE LAN",
                "Other": [
                    "1*USB3.0",
                    "1*WPS",
                    "1*RST"
                ]
            },
            "Features": [
                "Andlink",
                "Wi-Fi 6",
                "Mesh"
            ]
        }
    }
];
function TelecomPage() {
    const { spacing } = useTheme()
const {isMobile} = useDeviceType()
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = React.useState<any>(null);

    const openDialog = (product: any) => {
        setSelectedProduct(product);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    return (

        <>


            {/* Hero Section */}
            <HeroSection
                title="Innovative Telecom Solutions"
                description="Discover our range of cutting-edge telecom products, designed to deliver seamless connectivity and unparalleled performance."
                backgroundImage={'/products/telecom/telecom2.jpg'}
        
                showBreadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Telecom", href: "/telecom" },
                ]}
                showBackButton
            />



            <Stack p={4} spacing={4}>



                <Grid container justifyContent='center' spacing={spacing(4)}>
                    {/* Map through the products array */}
                    {products?.map((product, index) => (
                        <Grow key={index} in={true} timeout={1000} unmountOnExit>
                            <Grid  size={{sm:12,md:4,lg:3}}>
                                <Card variant='elevation' elevation={5}>
                                    <CardActionArea onClick={() => openDialog(product)}>
                                        <CardContent sx={{ display: 'flex', textAlign: 'center', flexDirection: 'column', justifyContent: "center" }}>
                                            <CardMedia
                                                component="img"
                                                image={product.image}
                                                alt={product.name}
                                                // width={1}
                                                // height={200}
                                                sx={{
                                                    alignSelf: 'center',
                                                    width: '220px',
                                                    minHeight: isMobile ? "auto" : 300,
                                                    objectFit: 'contain',
                                                    transition: 'transform 0.5s',
                                                    '&:hover': {
                                                        transform: 'scale(1.05)',
                                                    },

                                                }}
                                            />

                                            <Typography variant='subtitle1'>{product.name}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                        </Grow>
                    ))}

                    <Dialog maxWidth='lg' TransitionComponent={Slide} fullWidth open={dialogOpen} onClose={handleCloseDialog}>
                        <DialogTitle>{selectedProduct && selectedProduct?.name} Specifications</DialogTitle>
                        <DialogContent>
                            {/* Display selected product's image and specs */}
                            {selectedProduct && (
                                <Stack direction={{ xs: "column", lg: "row" }} alignItems={'center'}>
                                    {/* Render the selected product's image */}
                                    <div style={{}}>
                                        <CardMedia
                                            component='img'
                                            image={selectedProduct.image}
                                            // placeholder='blur' layout='responsive'
                                            alt={selectedProduct.name}
                                            sx={{ width: 400, height: 'auto' }}
                                        />
                                    </div>
                                    {/* Render the specs based on the selected product */}
                                    <div>
                                        {/* Render the specs as a list */}
                                        <Typography variant={'body1'}>{selectedProduct?.description}</Typography>
                                        <ul>
                                            {Object.entries(selectedProduct.specs).map(([key, value]: [key: any, value: any]) => (
                                                <li key={key}>
                                                    <strong>{key}: </strong>

                                                    {
                                                        typeof value === 'object' ? (
                                                            <ul>
                                                                {
                                                                    Object.entries(value).map(([subKey, subValue]: [subKey: any, subValue: any]) => (
                                                                        <li key={subKey}>
                                                                            <strong>{subKey}: </strong>
                                                                            {subValue}
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        ) : value

                                                    }


                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Stack>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button variant='contained' onClick={handleCloseDialog}>Close</Button>
                        </DialogActions>
                    </Dialog>


                </Grid>
            </Stack>
        </>


    )
}

export default TelecomPage