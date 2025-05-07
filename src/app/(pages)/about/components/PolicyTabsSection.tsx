'use client'
import { Grid, Typography, Button, Tabs, Tab, Box, Stack } from '@mui/material';
import { useState } from 'react';

const policies = [
    {
        label: 'Quality Policy',
        description: 'Our quality policy ensures excellence in every step of our process...',
        pdf: ['policies/quality-policy.pdf'],
        image: ['/policies/quality-policy.jpg'],
    },
    {
        label: 'Environment Policy',
        description: 'Our environmental policy commits to sustainability and eco-friendly practices...',
        pdf: ['/policies/environment-eng.pdf', '/policies/environment-hindi.pdf'],
        image: ['/policies/environment-eng.jpg', '/policies/environment-hindi.jpg'],
    },
    {
        label: 'OHS Policy',
        description: 'Our OHS policy protects the health and safety of our workforce...',
        pdf: ['/policies/ohs.pdf'],
        image: ['/policies/ohs.jpg'],
    },
];

export default function PolicyTabsSection() {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };



    return (
        <Box component="section" sx={{ textAlign: 'center' }}>
            <Stack spacing={4}>
                {/* Main Heading */}
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                    Our Policies
                </Typography>
                <Typography variant="body1">
                    Explore our core policies that guide our operations and commitment to excellence.
                </Typography>

                {/* Tabs */}
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    centered
                    indicatorColor="secondary"
                    textColor="secondary"
                    sx={{}}
                >
                    {policies?.map((policy, index) => (
                        <Tab label={policy.label} key={index} />
                    ))}
                </Tabs>

                {/* Tab Content */}
                {policies?.map((policy, index) => (
                    selectedTab === index && (
                        <Box key={index}>
                            <Typography variant="h3" fontWeight="bold" mb={2}>
                                {policy?.label}
                            </Typography>
                            <Typography variant="body1" mb={4}>
                                {policy?.description}
                            </Typography>

                            <Grid container spacing={4} justifyContent="center">
                                {policy?.pdf?.map((pdfUrl, i) => (
                                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
                                        <Box
                                            component="img"
                                            src={policy?.image[i]}
                                            alt={`${policy?.label} Preview ${i + 1}`}
                                            sx={{
                                                width: '100%',
                                                height: 300,
                                                objectFit: 'contain',
                                                borderRadius: 2,
                                                boxShadow: 3,
                                                mb: 2,
                                            }}
                                        />
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            href={pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        // fullWidth
                                        >
                                            View PDF
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    )
                ))}
            </Stack>
        </Box>
    );
}
