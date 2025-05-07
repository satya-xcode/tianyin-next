import LeadingOem from '@/components/home/LeadingOem';
import Status from '@/components/home/Status';
import AutoPlaySplideCarousel from '@/components/slider/AutoPlaySplideCarousel';
import SwiperCrousel from '@/components/slider/SwiperCrousel';

import { Container } from '@mui/material';

export const metadata = {
  title: 'Home | YourBrand',
  description: 'Welcome to YourBrand. Learn about our mission and services.',
};

export default function Home() {

  return (
    <Container maxWidth={false} disableGutters component="main" sx={{}}>
      <SwiperCrousel />
      <Status />
      <LeadingOem />
      <AutoPlaySplideCarousel />
    </Container>
  );
}
