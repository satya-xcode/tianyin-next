import BorderInfiniteAnimation from '@/components/animations/items/BorderInfiniteAnimation';
import ExpertGuide from '@/components/home/ExpertGuide';
import Infrastructure from '@/components/home/Infrastructure';
import LeadingOem from '@/components/home/LeadingOem';
import Status from '@/components/home/Status';
import MainContainer from '@/components/shared/MainContainer';
import AutoPlaySplideCarousel from '@/components/slider/AutoPlaySplideCarousel';
import SwiperCrousel from '@/components/slider/SwiperCrousel';
import { whyChooseUs } from '@/data/WhyChoose';

import { ElectricalServices, PrecisionManufacturing, Settings } from '@mui/icons-material';
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export const metadata = {
  title: 'Tianyin Worldtech | Top Mobile Charger Manufacturer in Noida, India',
  description:
    'Tianyin Worldtech is a leading OEM manufacturer of high-quality mobile chargers in Noida, India. Trusted for precision manufacturing, fast delivery, and reliable products.',
  keywords:
    'Mobile Charger Manufacturer Noida, Mobile Charger Supplier India, OEM Charger Manufacturing, Fast Charging Solutions, Tianyin Worldtech',
  generator: 'Next.js 15.3',
  applicationName: 'Tianyin Worldtech',
  creator: 'Tianyin Worldtech India Pvt. Ltd.',
  publisher: 'Tianyin Worldtech India Pvt. Ltd.',
  authors: [{ name: 'Tianyin Worldtech Team', url: 'https://tianyin.in' }],
  alternates: {
    canonical: 'https://tianyin.in/',
  },
  openGraph: {
    title: 'Tianyin Worldtech | Best Mobile Charger Manufacturer in Noida, India',
    description:
      'Explore premium mobile chargers from Tianyin Worldtech – OEM supplier based in Noida. Trusted by 150+ global partners for innovation and quality.',
    url: 'https://tianyin.in/',
    siteName: 'Tianyin Worldtech',
    images: [
      {
        url: 'https://www.tianyin.in/image/tianyin-production.webp',
        width: 1200,
        height: 630,
        alt: 'Tianyin Worldtech - Mobile Charger Manufacturer',
      },
      {
        url: 'https://www.tianyin.in/image/team-tianyin.webp',
        width: 1200,
        height: 630,
        alt: 'Team Tianyin - Experts in Charger Manufacturing',
      },
      {
        url: 'https://www.tianyin.in/image/overview/factory-overview.webp',
        width: 1200,
        height: 630,
        alt: 'Tianyin Worldtech Factory Floor - Noida',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tianyin Worldtech | OEM Mobile Charger Manufacturer in India',
    description:
      'We manufacture high-quality mobile chargers with precision and rapid delivery. Trusted OEM partner in India.',
    creator: '@tianyinworldtech',
    images: ['https://www.tianyin.in/image/tianyin-production.webp'],
  },
};

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters component="main">
      <SwiperCrousel />
      <MainContainer>
        <Status />
        <LeadingOem />
      </MainContainer>
      <AutoPlaySplideCarousel />
      <MainContainer>
        <Infrastructure />
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 4 }} data-aos="zoom-in-right">
            <Box
              component="img"
              src="/image/tianyin-production.webp"
              alt="Mobile charger assembly at Tianyin Worldtech Noida"
              sx={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }} data-aos="zoom-in-left">
            <Stack gap={3}>
              <Typography component="h1" variant="h2" fontWeight="bold">
                OEM Mobile Charger Manufacturer in Noida – Tianyin Worldtech
              </Typography>
              <Typography textAlign="justify" variant="body1" color="text.secondary">
                At <strong>Tianyin Worldtech</strong>, we deliver high-quality mobile chargers known for reliability, efficiency, and safety. As a premier <strong>OEM mobile charger manufacturer in Noida</strong>, our chargers support rapid charging and long-lasting performance for all device types. Choose innovation and precision for your power needs.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                href="/products"
                sx={{ width: 'fit-content', mt: 2 }}
              >
                View Our OEM Chargers
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }} data-aos="zoom-in">
            <Stack gap={3}>
              <Typography component="h2" variant="h2" fontWeight="bold">
                Trusted Mobile Charger Supplier Across India
              </Typography>
              <Typography textAlign="justify" variant="body1" color="text.secondary">
                As a trusted <strong>mobile charger supplier in India</strong>, Tianyin Worldtech delivers chargers with multi-port compatibility, advanced safety features, and premium materials. From doorstep delivery to after-sales support, we power your journey across India and beyond.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                href="/contact"
                sx={{ width: 'fit-content', mt: 2 }}
              >
                Get in Touch
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} data-aos="zoom-in-up">
            <Box
              component="img"
              src="/image/supplier2.webp"
              alt="Mobile charger supplier for India at Tianyin Worldtech"
              sx={{
                width: '100%',
                borderRadius: '16px',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
              }}
            />
          </Grid>
        </Grid>
        <Stack spacing={4}>
          <Typography variant="h2" align="center" fontWeight="bold">
            Why Choose Tianyin Worldtech?
          </Typography>
          <Grid container spacing={4}>
            {whyChooseUs.map((item, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index} data-aos={item.dataAos}>
                <Card sx={{ borderRadius: 0, textAlign: 'center', minHeight: '180px' }}>
                  <BorderInfiniteAnimation style={{ minHeight: '180px' }}>
                    <CardContent>
                      <Typography variant="h3" fontWeight="bold">
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </BorderInfiniteAnimation>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </MainContainer>
      <ExpertGuide />
      <MainContainer>

        <Stack spacing={4} textAlign="center" data-aos="fade-up" sx={{ position: 'relative', zIndex: 2 }}>
          <Stack>
            <Typography
              variant="h2"
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

            <Typography align="center" variant="body1" color="textSecondary">
              We specialize in delivering high-precision manufacturing solutions worldwide, trusted by over 150+ global industries for quality and reliability.
            </Typography>
          </Stack>

          <Grid container spacing={4}>
            {[{
              title: 'Production',
              description: 'Efficient, modern production processes ensure top-notch quality and speed.',
              icon: <PrecisionManufacturing fontSize="large" />,
            }, {
              title: 'Assembly',
              description: 'Accurate integration of components through advanced assembly practices.',
              icon: <Settings fontSize="large" />,
            }, {
              title: 'Innovation',
              description: 'Continuous R&D investments to create next-gen charging solutions.',
              icon: <ElectricalServices fontSize="large" />,
            }].map((service, index) => (
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
                    <Typography variant="h3" fontWeight="bold" align="center" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="center">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="body1" fontWeight="bold" color="primary" sx={{}}>
            Need high-quality OEM charger manufacturing? Call us at <span>(+91) 1204109448</span>
          </Typography>

        </Stack>

      </MainContainer>
    </Container>
  );
}
