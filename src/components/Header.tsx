'use client';

import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
];

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        YourBrand
                    </Typography>

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
                        navLinks.map(({ label, href }) => (
                            <Button key={href} color="inherit" component={Link} href={href}>
                                {label}
                            </Button>
                        ))
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}
