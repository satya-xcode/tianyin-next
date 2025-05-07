import BorderInfiniteAnimation from '@/components/animations/items/BorderInfiniteAnimation';
import ExpertGuide from '@/components/home/ExpertGuide';
import Infrastructure from '@/components/home/Infrastructure';
import LeadingOem from '@/components/home/LeadingOem';
import Status from '@/components/home/Status';
import AutoPlaySplideCarousel from '@/components/slider/AutoPlaySplideCarousel';
import SwiperCrousel from '@/components/slider/SwiperCrousel';
import { whyChooseUs } from '@/data/WhyChoose';
import { ElectricalServices, PrecisionManufacturing, Settings } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';


export const metadata = {
  title: 'Home | YourBrand',
  description: 'Welcome to YourBrand. Learn about our mission and services.',
};

export default function Home() {

  return (
    <Container maxWidth={false} disableGutters component="main" sx={{}}>
      <SwiperCrousel />
      <Stack spacing={4} p={4}>
        <Status />
        <LeadingOem />
        <AutoPlaySplideCarousel />
        <Infrastructure />

        {/* Best Mobile Charger Manufacturer in Noida */}
        <Stack >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 4 }} data-aos="zoom-in-right">
              <Box
                component="img"
                src="/image/assembl2.jpg"
                alt="Best Mobile Charger Manufacturer in Noida"
                sx={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }} data-aos="zoom-in-left">
              <Stack gap={3}>
                <Typography component="h1" variant={'h2'} fontWeight="bold">
                  Best Mobile Charger Manufacturer in Noida
                </Typography>
                <Typography component="p" textAlign={'justify'} variant={'body1'} color="text.secondary">
                  When heading out, the first thing we pack is a reliable portable mobile charger. As an essential accessory in our daily lives, it’s crucial to have a fast and efficient charging solution. At <strong>Tianyin Worldtech</strong>, we are recognized as one of the <strong>best mobile charger manufacturers in Noida</strong>. With us, you can find a wide range of high-quality mobile chargers designed for durability and performance at affordable rates. Switch to our high-capacity rapid charging solutions to make your travels easier and more convenient.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href='products'
                  sx={{ width: 'fit-content', mt: 2 }}
                >
                  Explore Our Products
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Stack>

        <Stack >
          <Grid container spacing={4} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }} data-aos="zoom-in">
              <Stack gap={3}>
                <Typography component="h2" variant={'h2'} fontWeight="bold">
                  Top Mobile Charger Supplier in India
                </Typography>
                <Typography component="p" textAlign={'justify'} variant={'body1'} color="text.secondary">
                  As a leading <strong>mobile charger supplier in India</strong>, Tianyin Worldtech offers chargers with multiple charging ports, ensuring compatibility with various devices. Our team of experienced professionals uses the finest materials to craft high-quality chargers that protect your devices from overcharging. With our commitment to customer satisfaction, we provide doorstep delivery across prime locations in India. Explore our range of reliable and efficient charging solutions today.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link}
                  href='contact'
                  sx={{ width: 'fit-content', mt: 2 }}
                >
                  Contact Us Now
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }} data-aos="zoom-in-up">
              <Box
                component="img"
                src="/image/supplier2.jpg"
                alt="Top Mobile Charger Supplier in India"

                sx={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>
          </Grid>
        </Stack>


        <Stack spacing={4}>
          <Typography variant={'h2'} align="center" fontWeight="bold">
            Why Us ?
          </Typography>

          {/* Features Grid */}
          <Grid container spacing={4}>
            {whyChooseUs.map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index} data-aos={item.dataAos}>

                <Card sx={{
                  borderRadius: 0,
                  textAlign: "center",
                  minHeight: '180px',
                  // backdropFilter: "blur(5px)", // Add this line to blur the background
                  // backgroundColor: "rgba(20, 20, 20, 0.10)", // Add this line to make the card background 50% transparent 
                }}>
                  <BorderInfiniteAnimation style={{ minHeight: '180px' }}>
                    <CardContent>
                      <Typography variant={'h3'} fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography variant={'body1'} color="textSecondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </BorderInfiniteAnimation>
                </Card>

              </Grid>
            ))}
          </Grid>

        </Stack>



        <ExpertGuide />


        {/* About Section */}
        <Stack>
          {/* Background Shapes */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(12, 212, 202, 0.1) 10%, transparent 10.01%)',
              backgroundSize: '20px 20px',
              zIndex: 1,
            }}
          />

          <Stack sx={{ position: 'relative', zIndex: 2 }}>
            <Stack gap={4} textAlign="center" data-aos="fade-up">
              <Typography
                variant={'h2'}
                fontWeight="bold"
                color="primary.main"
                sx={{
                  textShadow: '0px 10px 15px rgba(12, 212, 202, 0.46)',
                  letterSpacing: '1px',
                  wordSpacing: '2px',
                  lineHeight: '1.2',
                  fontStyle: 'italic',
                }}
              >
                Powering Innovation and Excellence Since 2015
              </Typography>

              <Typography align="center" variant={'body1'} color="textSecondary">
                We specialize in delivering high-precision manufacturing solutions worldwide, ensuring top-tier quality and reliability. Partnering with 150+ global industries, we are committed to excellence in the following areas:
              </Typography>

              {/* Cards for Services */}
              <Grid container spacing={4}>
                {[
                  {
                    title: "Production",
                    description: "We utilize state-of-the-art technology to ensure efficient and effective production processes.",
                    icon: <PrecisionManufacturing fontSize="large" />,
                  },
                  {
                    title: "Assembly",
                    description: "Our team of experts provides precise assembly services, ensuring that all components are properly integrated.",
                    icon: <Settings fontSize="large" />,
                  },
                  {
                    title: "Innovation",
                    description: "We continuously invest in research and development to stay ahead of the curve and provide innovative solutions.",
                    icon: <ElectricalServices fontSize="large" />,
                  },
                ].map((service, index) => (
                  <Grid size={{ xs: 12, md: 4 }} key={index}>
                    <Card>
                      <CardContent>

                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                          <Box
                            sx={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '64px',
                              height: '64px',
                              borderRadius: '16px',
                              bgcolor: 'primary.main',
                              color: 'white',
                            }}
                          >
                            {service.icon}
                          </Box>
                        </Box>
                        <Typography variant={'h3'} fontWeight="bold" align="center" gutterBottom>
                          {service.title}
                        </Typography>
                        <Typography variant={'body1'} color="textSecondary" align="center">
                          {service.description}
                        </Typography>

                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Call to Action */}
              <Typography variant={'body1'} fontWeight="bold" color="primary" sx={{ mt: 4 }}>
                Need high-quality manufacturing services? Call us at <span>(+91) 1204109448</span>
              </Typography>
            </Stack>
          </Stack>
        </Stack>


      </Stack>
    </Container>
  );
}
