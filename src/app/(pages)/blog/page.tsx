import { Box, Stack } from "@mui/material";
import MeetingSection from "./components/MeetingSection";
import AlbumStrip from "./components/AlbumStrip";
import HeroSection from "@/components/shared/HeroSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog | YourBrand',
    description: 'Welcome to YourBrand. Learn about our mission and services.',
};

const BlogPage = () => {
    return (
        <>

            <HeroSection
                title="Explore Our Blog"
                description="Discover the latest insights, trends, and stories from Tianyin Worldtech."
                backgroundImage="/image/banners/blog.jpg"
                showBreadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Blog", href: "/blog" },
                ]}
                showBackButton
            />


            {/* Main Content Section */}
            <Stack p={4}>

                {/* Background Shapes */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0, // Ensure shapes are behind the content
                        overflow: 'hidden',
                    }}
                >

                    <Box
                        sx={{
                            position: 'absolute',
                            top: '70%',
                            left: '10%',
                            width: '300px',
                            height: '300px',
                            background: 'linear-gradient(90deg, #FF69B4 0%, #FFC67D 17%, #F7DC6F 33%, #8BC34A 50%, #03A9F4 67%, #03A9F4 83%, #8E24AA 100%)', // Dual color gradient
                            transform: 'rotate(45deg)',
                            filter: 'blur(10px)', // Blur effect
                            opacity: 0.07, // Opacity to create a shadow effect
                            animation: 'moveShape1 15s infinite ease-in-out',
                        }}
                    />


                </Box>

                <Stack gap={4}>
                    <MeetingSection />

                    <AlbumStrip />
                </Stack>
            </Stack>

        </>
    );
};

export default BlogPage;