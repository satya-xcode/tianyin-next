'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"@ts-expect-error"
import 'swiper/css';
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
"@ts-expect-error"
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Avatar, Card, CardContent, Tooltip, Typography } from '@mui/material';
import useDeviceType from '../../hooks/ui/useDeviceType';
import { singleLineSort } from '../animations/css/export/textSortStyles';
import { employees } from '@/data/Employee';

const colorCombinations = [
    {
        name: 'Deep Navy and Soft Blue',
        gradient: 'linear-gradient(to bottom, rgb(15, 30, 60), rgb(20, 40, 80))'
    },
    {
        name: 'Dark Grey and Rich Blue',
        gradient: 'linear-gradient(to bottom, rgb(30, 30, 50), rgb(40, 40, 70))'
    },
    {
        name: 'Midnight Blue and Deep Purple',
        gradient: 'linear-gradient(to bottom, rgb(20, 20, 50), rgb(30, 10, 60))'
    },
    {
        name: 'Charcoal and Navy Blue',
        gradient: 'linear-gradient(to bottom, rgb(40, 40, 40), rgb(50, 50, 70))'
    },
    {
        name: 'Dark Blue and Soft Grey',
        gradient: 'linear-gradient(to bottom, rgb(25, 40, 60), rgb(35, 50, 80))'
    }
];
export default function SwiperEmployeeCarousel() {
    const { isMobile, isTablet, isDesktop, isLargeDesktop } = useDeviceType()
    return (
        <>
            <Swiper
                data-aos="fade-down"
                slidesPerView={(isTablet || isMobile) ? 1 : isDesktop ? 2 : isLargeDesktop ? 3 : 4}
                spaceBetween={15}
                loop
                autoplay={{ delay: 1000, pauseOnMouseEnter: true }}
                // pagination={{ enabled: false, clickable: true }}
                modules={[Autoplay, Navigation]}
                // navigation
                pagination={{ clickable: true }}
                navigation={!isMobile} // Hide navigation arrows on mobile
                // modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                style={{ height: "100%", width: "100%", padding: isMobile ? 5 : 40 }}
            >
                {employees.map((employee, index) => (
                    <SwiperSlide key={index} style={{ cursor: 'pointer' }}>
                        <Card sx={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            alignItems: "center",
                            textAlign: "center",
                            padding: 2,
                            borderRadius: 2,
                            height: isMobile ? '310px' : '200px',
                            background: colorCombinations[index % colorCombinations.length].gradient,
                            boxShadow: 2
                        }}>
                            <Avatar src={employee.avatar} sx={{ alignSelf: 'center', width: 100, height: 100, borderRadius: "50%" }} />
                            <CardContent>
                                <Typography variant={'h3'} align={isMobile ? 'center' : 'left'} color="primary.light" fontWeight="bold">
                                    {employee.name}
                                </Typography>
                                {/* <Divider sx={{ bgcolor: 'primary.dark' }} variant='fullWidth' /> */}

                                <Tooltip arrow title={
                                    <>
                                        <Typography variant="body1"
                                            color="textPrimary"
                                            component="p"
                                        >{employee.profile}
                                        </Typography>
                                    </>
                                } >

                                    <Typography fontWeight={'bold'} align={isMobile ? 'center' : 'left'} sx={!isMobile ? { ...singleLineSort } : {}} variant={'body1'} color="primary.main">
                                        {employee.profile}
                                    </Typography>
                                </Tooltip>
                                <Typography align={isMobile ? 'center' : 'left'} variant={'body1'} color="textPrimary">
                                    {employee.experience} years of experience
                                </Typography>
                                <Tooltip arrow title={
                                    <>
                                        <Typography variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >{employee.description}
                                        </Typography>
                                    </>
                                } >
                                    <Typography align={isMobile ? 'center' : 'left'} variant={'body1'} color="textSecondary" sx={{
                                        fontSize: '0.9rem',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: isMobile ? 0 : 3,
                                        WebkitBoxOrient: 'vertical'
                                    }}>
                                        {employee.description}
                                    </Typography>
                                </Tooltip>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
