import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/about', '/contact', '/career'], // Allow these pages to be crawled
            disallow: ['/admin/'], // Additional pages to avoid being indexed
        },
        sitemap: 'https://tianyin.in/sitemap.xml', // Link to your sitemap
    }
}
