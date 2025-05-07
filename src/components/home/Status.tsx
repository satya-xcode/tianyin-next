'use client'
import { CardContent, Grid, Typography, useTheme } from "@mui/material";
import CountUp from 'react-countup';
import { memo } from "react";
import AnimatedHoveredBorder from "../animations/items/AnimatedHoveredBorder";

const stats = [
    { label: "Number Of SKU's", value: 100, color: "rgba(26, 42, 71, 0.8)" },
    { label: "Total Product Sold", value: 130000000, color: "rgba(26, 42, 71, 1)" },
    { label: "Number Of Customers", value: 50, color: "rgba(26, 42, 71, 0.6)" },
];

function Status() {

    return (
        <>
            <Grid container spacing={4} justifyContent="center">
                {stats.map((stat, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={index}>
                        <AnimatedHoveredBorder>
                            <CardContent sx={{ textAlign: "center" }}>
                                {/* Label */}
                                <Typography
                                    variant={'h3'} // Adjust font size for mobile
                                    fontWeight={600}
                                >
                                    {stat.label}
                                </Typography>

                                {/* Value */}
                                <Typography
                                    variant={'h2'} // Adjust font size for mobile
                                    fontWeight={700}
                                    component={'p'}
                                >
                                    <CountUp start={0} end={stat.value} duration={5} separator="," />
                                </Typography>
                            </CardContent>
                        </AnimatedHoveredBorder>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default memo(Status);