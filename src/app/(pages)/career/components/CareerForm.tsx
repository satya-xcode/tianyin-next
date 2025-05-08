'use client'
import React from 'react'
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
    Container,
    Grid,
    Typography,
    Button,
    TextField,
    Card,
    CardContent,
    LinearProgress,
    useTheme,
    Stack,
    CardHeader,
    Avatar,
    IconButton,

} from "@mui/material";
// import Swal from 'sweetalert2'
import { Send, UploadFile } from "@mui/icons-material";
import groovyWalkAnimation from "../../../../assets/lotties/career2.json";
import Swal from "sweetalert2";
import dynamic from 'next/dynamic';
import { useCareerEnquiry } from '@/hooks/data/useCareerEnquiry';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const validationSchema = Yup.object({
    fullName: Yup.string().matches(/^[^\d]+$/, 'Full Name must not contain numbers').required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    mobileNumber: Yup.string()
        .matches(/^[0-9]+$/, 'Mobile number must only contain numbers')
        .min(10, 'Mobile number must be at least 10 digits')
        .max(10, 'Mobile number must be at most 10 digits')
        .required('Mobile Number is required'),
    requirement: Yup.string().required('Your Requirement is required'),
    resume: Yup.mixed().required('Resume is required'), // Adding validation for resume field
});

export default function CareerForm() {
    const { spacing } = useTheme()
    const { createCareerEnquiry } = useCareerEnquiry()
    // console.log('Error From Ui', error)
    const [selectedFile, setSelectedFile] = useState(null);


    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            mobileNumber: '',
            requirement: '',
            resume: null, // Initializing resume field with null
        },
        validationSchema,
        onSubmit: async (values: any) => {
            try {
                formik.setSubmitting(true);
                const formData = new FormData();
                formData.append('fullName', values.fullName);
                formData.append('email', values.email);
                formData.append('mobileNumber', values.mobileNumber);
                formData.append('requirement', values.requirement);
                formData.append('resume', values.resume); // Appending resume file
                const result = await createCareerEnquiry(formData);
                // console.log('Response', resut)
                Swal.fire({
                    title: 'Thank You !',
                    text: result.message,
                    icon: 'success',
                    confirmButtonText: 'Okay'
                });
                setSelectedFile(null)
                formik.resetForm();
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                // console.log('Error', error);
                Swal.fire({
                    title: 'Failed to send email !',
                    text: error?.response?.data?.message,
                    icon: 'error',
                    confirmButtonText: 'Okay'
                });
            } finally {
                formik.setSubmitting(false);
            }
        },
    });


    const handleFileChange = (event: any) => {
        const file = event.currentTarget.files[0];
        formik.setFieldValue('resume', file);
        setSelectedFile(file ? file.name : null); // Update selectedFile state with the selected file name
    };


    return (
        <Stack gap={4}>
            <Stack alignItems={'center'}>
                <Typography data-aos="fade-down" variant={'h2'}
                    fontWeight="bold"
                    align="center"
                    component="h2"
                    id="application-heading"
                >
                    Apply for a Position
                </Typography>
            </Stack>

            <Container disableGutters>
                <Grid container justifyContent={'center'} spacing={spacing(2)} alignItems={'center'}>
                    <Grid size={{ xs: 12, md: 6 }} data-aos="fade-up" component="article">
                        <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                            <Card elevation={0} variant="elevation" component="div">
                                {
                                    formik.isSubmitting && <LinearProgress color="secondary" />
                                }


                                <CardHeader
                                    title={
                                        <Typography component="h3" variant={'h2'}>
                                            Career Application Form
                                        </Typography>
                                    }
                                    subheader="Please fill out the form below to apply for a position"
                                    avatar={<Avatar src="/image/avatar.jpg" sx={{ bgcolor: 'primary.light' }} />}
                                    action={
                                        <IconButton>
                                            <Typography variant="body2">
                                                {new Date().toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </Typography>
                                        </IconButton>
                                    }
                                    aria-label="Job application form"
                                />

                                <CardContent>
                                    <Grid container spacing={spacing(2)}>
                                        <Grid size={{ xs: 12, md: 6 }}>
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
                                                helperText={formik?.touched?.fullName && formik?.errors?.fullName?.toString()}
                                                aria-label="Enter your full name"
                                            />
                                        </Grid>
                                        <Grid size={{ xs: 12, md: 6 }}>
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
                                            <input
                                                type='file'
                                                id='resume'
                                                name='resume'
                                                onChange={handleFileChange}
                                                style={{ display: 'none' }}
                                                accept='.pdf,.doc,.docx'
                                            // accept='.jpeg,.jpg,.png'

                                            />
                                            <Stack direction={'row'} alignItems={'center'} gap={spacing(1)}>
                                                <label htmlFor='resume'>
                                                    <Button component='span' startIcon={<UploadFile />} variant='outlined' color='primary'>
                                                        Upload Resume
                                                    </Button>
                                                </label>
                                                {selectedFile ? selectedFile : null}
                                            </Stack>
                                            {formik.touched.resume && formik.errors.resume && (
                                                <Typography variant='body2' color='error'>
                                                    {formik.errors.resume.toString()}
                                                </Typography>
                                            )}
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
                                                endIcon={<Send />}
                                                loading={formik.isSubmitting}
                                                loadingPosition="start"
                                                disabled={formik.isSubmitting}

                                            >
                                                Submit Application
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </form>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} aria-hidden="true">
                        <Lottie animationData={groovyWalkAnimation} loop={true} />
                    </Grid>
                </Grid>

            </Container>
        </Stack>


    )
}

