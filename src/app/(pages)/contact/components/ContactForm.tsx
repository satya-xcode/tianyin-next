'use client'
import React from 'react'
import { Grid, Typography, TextField, Card, CardContent, IconButton, useTheme, Stack, LinearProgress, Avatar, CardHeader, Button } from "@mui/material";
import { Send, Mail } from "@mui/icons-material";
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { FormikValues, useFormik } from 'formik';
import { useGeneralEnquiry } from '@/hooks/data/useGeneralEnquiry';
import Lottie from 'lottie-react';
import groovyWalkAnimation from "../../../../assets/lotties/l2.json";
const validationSchema = Yup.object({
    fullName: Yup.string().matches(/^[^\d]+$/, 'Full Name must not contain numbers').required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobileNumber: Yup.string()
        .matches(/^[0-9]+$/, 'Mobile number must only contain numbers')
        .min(10, 'Mobile number must be at least 10 digits')
        .max(10, 'Mobile number must be at most 10 digits')
        .required('Mobile Number is required'),
    requirement: Yup.string().required('Your Requirement is required'),
});


function ContactForm() {
    const { spacing } = useTheme();
    const { createGeneralEnquiry } = useGeneralEnquiry()

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            mobileNumber: '',
            requirement: '',
        },
        validationSchema,
        onSubmit: async (values: FormikValues) => {
            try {
                formik.setSubmitting(true);
                const formData = new FormData();
                formData.append('fullName', values.fullName);
                formData.append('email', values.email);
                formData.append('mobileNumber', values.mobileNumber);
                formData.append('requirement', values.requirement);
                const result = await createGeneralEnquiry(values)
                // console.log('result', result?.data)
                Swal.fire({
                    title: 'Thank You !',
                    text: result?.message,
                    icon: 'success',
                    confirmButtonText: 'Okay'
                });
                formik.resetForm();
                // // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                // "@ts-expect-error"
            } catch (err) {
                Swal.fire({
                    title: 'Failed to send email !',
                    // @ts-expect-error: err is not typed correctly.
                    text: err.response?.data?.message,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            } finally {
                formik.setSubmitting(false);
            }
        },
    });



    return (
        <Grid container justifyContent={'center'} spacing={2} alignItems={'center'}>
            <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" component="section">
                <form onSubmit={formik.handleSubmit} encType="multipart/form-data" aria-label="Contact form">
                    <Card aria-labelledby="contact-form-heading">
                        {
                            formik.isSubmitting && <LinearProgress color="secondary" />
                        }

                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: 'primary.light' }} aria-label="recipe">
                                    <Mail />
                                </Avatar>
                            }
                            action={
                                <IconButton>
                                    <Typography variant="body2">
                                        {new Date().toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </Typography>
                                </IconButton>
                            }
                            title={<Typography variant={'body1'} component={'h2'} id="contact-form-heading">Get in Touch with Us</Typography>}
                            subheader="We're here to help with any questions or concerns"
                        />
                        <CardContent>
                            <Stack>
                                <Grid container spacing={spacing(2)}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            id="fullName"
                                            label="Full Name"
                                            name="fullName"
                                            variant="outlined"
                                            value={formik.values.fullName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                            helperText={formik.touched.fullName && formik.errors.fullName?.toString()}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <TextField
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            variant="outlined"
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.email && Boolean(formik.errors.email)}
                                            helperText={formik.touched.email && formik.errors.email?.toString()}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            id="mobileNumber"
                                            label="Mobile Number"
                                            name="mobileNumber"
                                            type="tel"
                                            variant="outlined"
                                            value={formik.values.mobileNumber}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                                            helperText={formik.touched.mobileNumber && formik.errors.mobileNumber?.toString()}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <TextField
                                            fullWidth
                                            id="requirement"
                                            label="Your Requirement"
                                            name="requirement"
                                            multiline
                                            rows={4}
                                            variant="outlined"
                                            value={formik.values.requirement}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            error={formik.touched.requirement && Boolean(formik.errors.requirement)}
                                            helperText={formik.touched.requirement && formik.errors.requirement?.toString()}
                                        />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Button
                                            type='submit'
                                            variant='contained'
                                            color='primary'
                                            loading={formik.isSubmitting}
                                            disabled={formik.isSubmitting}
                                            endIcon={<Send />}
                                        >
                                            Send Message
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </CardContent>
                    </Card>
                </form>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} justifyContent={'end'} alignItems={'flex-end'}>
                <Lottie
                    animationData={groovyWalkAnimation}
                    loop={true}
                    style={{ width: '100%', height: '100%' }}
                />
            </Grid>
        </Grid>
    )
}

export default ContactForm