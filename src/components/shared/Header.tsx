/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import useDeviceType from '@/hooks/ui/useDeviceType';
import { usePathname } from 'next/navigation';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Career', href: '/career' },
    { label: 'Blog', href: '/blog' },
];

export default function Header() {
    const currentRoute = usePathname();
    // const currentRoute = router.pathname;
    const { isMobile } = useDeviceType()
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <AppBar color='default' position='fixed'>
            <Toolbar>
                <Stack flexGrow={1} direction={'row'} justifyContent={'space-between'}>
                    <Stack href="." flex={1} component={Link}>
                        <img
                            src={'logo/logo.png'}
                            alt="Tianyin Worldtech India Pvt Ltd Logo"
                            title="Tianyin Worldtech India Pvt Ltd"
                            loading="lazy"
                            width={"120"} // Adjust based on design
                            height="40"
                        />
                    </Stack>

                    <Stack component={'div'} direction={'row'} alignItems={'center'}>
                        {isMobile ? (
                            <>
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={() => setDrawerOpen(true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    anchor="left"
                                    open={drawerOpen}
                                    onClose={() => setDrawerOpen(false)}
                                >
                                    <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
                                        <List>
                                            {navLinks.map(({ label, href }) => (
                                                <ListItem key={href} disablePadding>
                                                    <ListItemButton component={Link} href={href}>
                                                        <ListItemText primary={label} />
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Drawer>
                            </>
                        ) : (
                            navLinks?.map(({ label, href }) => (
                                <Button key={href} component={Link} href={href}
                                    sx={{
                                        backgroundColor: currentRoute === href ? 'primary.main' : 'inherit',
                                        color: currentRoute === href ? 'inherit' : 'primary.main',
                                    }}
                                >
                                    {label}
                                </Button>
                            ))
                        )}
                    </Stack>

                </Stack>
            </Toolbar>
        </AppBar >

    );
}
