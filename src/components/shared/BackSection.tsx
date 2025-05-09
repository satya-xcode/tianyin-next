'use client'
import { Button, Stack, Typography, useTheme, Box } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';

import useDeviceType from '../../hooks/ui/useDeviceType';
import { useRouter } from 'next/navigation';

function BackSection({ title, description }: { title: string; description: string }) {
    const { isMobile } = useDeviceType();
    const { spacing, palette } = useTheme();
    const navigate = useRouter();


    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(135deg, rgba(8, 29, 131, 0.32) 30%, rgba(1, 59, 52, 0.19) 50%)`,
                borderRadius: 2,
                p: spacing(3),
                // boxShadow: 3,
                // mb: spacing(4),
            }}
        >
            <Stack gap={spacing(2)} alignItems="start" justifyContent="start">
                {/* Back Button and Title */}
                <Stack direction="row" alignItems="center" gap={spacing(2)}>
                    <Button
                        variant="contained"
                        size={'small'}
                        onClick={() => navigate.back()}
                        color='primary'
                        startIcon={<ArrowBackIosNew sx={{ fontSize: isMobile ? '1rem' : '1.25rem' }} />}
                        sx={{
                            // backgroundColor: palette.background.paper,
                            // color: palette.text.primary,
                            '&:hover': {
                                backgroundColor: palette.action.hover,
                            },
                        }}
                    >
                        Back
                    </Button>
                    <Typography variant={'h2'} fontWeight="bold" color="text.primary">
                        {title}
                    </Typography>
                </Stack>

                {/* Description */}
                <Typography variant={'body1'} color="text.secondary">
                    {description}
                </Typography>

                {/* Glowing Divider */}
                {/* <GlowingDivider /> */}
            </Stack>
        </Box>
    );
}

export default BackSection;