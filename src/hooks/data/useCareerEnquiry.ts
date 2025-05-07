import useSWR from 'swr';
import axios from 'axios';
import { useCallback } from 'react';

const prodBaseUrl = "https://tianyin-backend.onrender.com/api/tianyin/v1/"
const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useCareerEnquiry = () => {
    const { data, error, isLoading, mutate } = useSWR(prodBaseUrl + 'career-enquiries', fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false
    });
    // console.log('Brands', data)
    const createCareerEnquiry = useCallback(async (data: any) => {
        try {
            const response = await axios.post(prodBaseUrl + 'career-enquiries', data);
            mutate();
            return response.data;
        } catch (err) {
            console.error('fromHook', err);
            throw err;
        }
    }, [mutate]);

    const updateCareerEnquiry = useCallback(async (updatedBrand: any) => {
        try {
            const response = await axios.put(prodBaseUrl + `career-enquiries`, updatedBrand);
            mutate();
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }, [mutate]);

    const deleteGeneralEnquiry = useCallback(async (brandId: any) => {
        try {
            const response = await axios.delete(prodBaseUrl + `enquiries`, { data: brandId });
            mutate(); // Revalidate data
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }, [mutate]);

    return {
        enquiries: data?.data,
        isLoading,
        error,
        createCareerEnquiry,
        updateCareerEnquiry,
        deleteGeneralEnquiry
    };
};
