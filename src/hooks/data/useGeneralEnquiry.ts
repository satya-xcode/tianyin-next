'use client'
import useSWR from 'swr';
import axios from 'axios';
import { useCallback } from 'react';
const prodBaseUrl = "https://tianyin-backend.onrender.com/api/tianyin/v1/"
const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useGeneralEnquiry = () => {
    const { data, error, isLoading, mutate } = useSWR(prodBaseUrl + 'enquiries', fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false
    });
    // console.log('Brands', data)
    const createGeneralEnquiry = useCallback(async (data: unknown) => {
        try {
            const response = await axios.post(prodBaseUrl + 'enquiries', data);
            mutate();
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }, [mutate]);

    const updateGeneralEnquiry = useCallback(async (updatedBrand: unknown) => {
        try {
            const response = await axios.put(prodBaseUrl + `enquiries`, updatedBrand);
            mutate();
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }, [mutate]);

    const deleteGeneralEnquiry = useCallback(async (brandId: string) => {
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
        createGeneralEnquiry,
        updateGeneralEnquiry,
        deleteGeneralEnquiry
    };
};
