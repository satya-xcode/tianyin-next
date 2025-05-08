import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date().toISOString();  // Use ISO string format for lastModified
    return [
        {
            url: 'https://tianyin.in',
            lastModified: currentDate,
            changeFrequency: 'yearly',
            priority: 1,
            images: ['https://tianyin.in/image.jpg'],  // Make sure the full URL is correct
        },
        {
            url: 'https://tianyin.in/about',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://tianyin.in/contact',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://tianyin.in/career',
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        }
    ]
}
