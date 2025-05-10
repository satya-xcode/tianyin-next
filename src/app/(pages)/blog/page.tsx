import MeetingSection from "./components/MeetingSection";
import AlbumStrip from "./components/AlbumStrip";
import HeroSection from "@/components/shared/HeroSection";
import { Metadata } from "next";
import MainContainer from "@/components/shared/MainContainer";

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
            <MainContainer>

                <MeetingSection />

                <AlbumStrip />

            </MainContainer>

        </>
    );
};

export default BlogPage;