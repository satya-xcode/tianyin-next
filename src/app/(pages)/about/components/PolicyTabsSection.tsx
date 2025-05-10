'use client'
import useDeviceType from '@/hooks/ui/useDeviceType';
import { EnergySavingsLeafRounded, OtherHouses, Policy } from '@mui/icons-material';
import { Typography, Button, Tabs, Tab, Box, Stack, useTheme } from '@mui/material';
import { useState } from 'react';

const policies = [
    {
        label: 'Quality Policy',
        description: 'Our quality policy ensures excellence in every step of our process...',
        pdf: ['policies/quality-policy.pdf'],
        image: ['/policies/quality-policy.jpg'],
        icon: <Policy />
    },
    {
        label: 'Environment Policy',
        description: 'Our environmental policy commits to sustainability and eco-friendly practices...',
        pdf: ['/policies/environment-eng.pdf', '/policies/environment-hindi.pdf'],
        image: ['/policies/environment-eng.jpg', '/policies/environment-hindi.jpg'],
        icon: <EnergySavingsLeafRounded />
    },
    {
        label: 'OHS Policy',
        description: 'Our OHS policy protects the health and safety of our workforce...',
        pdf: ['/policies/ohs.pdf'],
        image: ['/policies/ohs.jpg'],
        icon: <OtherHouses />
    },
];

export default function PolicyTabsSection() {
    const [selectedTab, setSelectedTab] = useState(0);
    const { spacing } = useTheme()
    const { isMobile } = useDeviceType()
    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };



    return (

        <Stack component="section" spacing={spacing(4)}>
            {/* Main Heading */}
            <Stack component={'span'} alignItems={'self-start'}>
                <Typography variant="h2" fontWeight="bold" >
                    Our Policies
                </Typography>
                <Typography variant="body1">
                    Explore our core policies that guide our operations and commitment to excellence.
                </Typography>
            </Stack>

            {/* Tabs */}

            <Stack spacing={spacing(4)} direction={isMobile ? 'column' : 'row'} >
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    orientation={isMobile ? 'horizontal' : 'vertical'}
                    variant="scrollable"
                    indicatorColor="primary"
                    textColor="primary"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    {policies?.map((policy, index) => (
                        <Tab iconPosition='start' icon={policy.icon} label={policy.label} key={index} />
                    ))}
                </Tabs>

                {/* Tab Content */}
                <Stack flexGrow={1}>

                    {policies?.map((policy, index) => (
                        selectedTab === index && (
                            <Stack key={index} spacing={spacing(4)}>
                                <Stack alignItems={'center'} textAlign={'left'}>
                                    <Typography textAlign={'center'} color='textSecondary' variant="h3">
                                        {policy?.label}
                                    </Typography>
                                    <Typography variant="body1" align='center' color='textSecondary'>
                                        {policy?.description}
                                    </Typography>
                                </Stack>

                                <Stack direction={isMobile ? 'column' : 'row'} alignItems={'center'} spacing={4} justifyContent={'center'}>
                                    {policy?.pdf?.map((pdfUrl, i) => (
                                        <Stack spacing={spacing(4)} key={i}>
                                            <Box
                                                component="img"
                                                src={policy?.image[i]}
                                                alt={`${policy?.label} Preview ${i + 1}`}
                                                sx={{
                                                    // bgcolor: 'lightblue',
                                                    width: 200,
                                                    height: 300,
                                                    objectFit: 'contain',
                                                    borderRadius: 2,
                                                    boxShadow: 3,
                                                    // mb: 2,
                                                }}
                                            />
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                startIcon
                                                href={pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            // fullWidth
                                            >
                                                View PDF
                                            </Button>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Stack>
                        )
                    ))}

                </Stack>


            </Stack>


        </Stack>

    );
}
